chrome.contextMenus.create(
  {
    title: 'root',
    id: 'menu-0'
  }
);

for (let i = 1; i < 31; i++) {
  chrome.contextMenus.create(
    {
      id: `menu-${i}`,
      parentId: `menu-${i - 1}`,
      title: `Menu ${i} ${'a'.repeat(i * 2)}`,
    }
  );
  for (let j = 0; j < i; j++) {
    chrome.contextMenus.create(
      {
        id: `menu-${i}-${j}`,
        parentId: `menu-${i - 1}`,
        title: `Menu ${i} item ${j}`
      }
    );
  }
}
