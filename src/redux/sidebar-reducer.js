let defaultSidebar = {
   friends: [
      { id: 1, name: "Sergey", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/10707_1374765036173495_4965299597682744404_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=y772tGW89qMAX_RHNdP&_nc_ht=scontent.fiev12-1.fna&oh=7fa280c3df0640d360e8b3ce12965138&oe=5FE3DEC4" },
      { id: 2, name: "Dasha", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/117719676_1200697036953865_1942958823265836547_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=9BoHf30vUmYAX-lPDyp&_nc_ht=scontent.fiev12-1.fna&oh=280ea4a9fae22df41a799808e684fa6c&oe=5FCFE926" },
      { id: 3, name: "Lena", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/59637848_658070961302606_3329770574154039296_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=jVgfqFl7enwAX-zEMqz&_nc_ht=scontent.fiev12-1.fna&oh=7637b8b9fed4f2ee5d1689db0eecf51d&oe=5FD1EADC" },
      { id: 4, name: "Dima", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t31.0-8/27023769_2052066251705498_8571303532211497264_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=qtJbZEajFZAAX-HNxeR&_nc_ht=scontent.fiev12-1.fna&oh=95d53e0542db1217242af274018f0d5b&oe=5FCFE833" }
   ]
}

const sidebarReducer = (state = defaultSidebar, action) => {
   return state;
}

export default sidebarReducer;