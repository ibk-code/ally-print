async function homeItems(parent, args, context, info) {
  
  const ritem = await context.prisma.items();

  return ritem;
}

module.exports = {
  homeItems,
}