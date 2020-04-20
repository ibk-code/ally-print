const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {APP_SECRET, getUserId} = require('../auth/Util')

// A `main` function so that we can use async/await
async function createitem(parent, args, context, info) {
  // Create a new user called `Alice`
  const newItem = await context.prisma.createItem({ img: args.img, pname: args.pname, pdetails: args.pdetails, price: args.price, pcs: args.pcs, favourite: args.favourite});
  console.log(`Created new user: ${newItem.name} (ID: ${newItem.id})`);

  // Read all users from the database and print them to the console
  const allItems = await context.prisma.items();

  return allItems;
}

// createitem().catch(e => console.error(e));

async function signup(parent, args, context, info) {
  let user;
  
  const password = await bcrypt.hash(args.password, 10);

  try{
    user = await context.prisma.createUser({...args, password})
  }catch(e){
    console.log ("Error:" + e.description)
    return
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return{
    token,
    user,
  }

}

async function login(parent, args, context, info) {

  const user = await context.prisma.user({ email: args.email });

  if (!user) {
    throw new Error("No user found, Please create an account");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  
  if (!valid) {
    throw new Error("Password is incorrect, try again");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return{
    token,
    user,
  }

}

module.exports = {
  createitem,
  signup,
  login
}