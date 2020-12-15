let defaultSidebar = {
   friends: [
      { id: 1, name: "Sergey", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/10707_1374765036173495_4965299597682744404_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=y772tGW89qMAX_RHNdP&_nc_ht=scontent.fiev12-1.fna&oh=7fa280c3df0640d360e8b3ce12965138&oe=5FE3DEC4" },
      { id: 2, name: "Dasha", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/117719676_1200697036953865_1942958823265836547_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=m0lq4yOGEK0AX8X0pk3&_nc_ht=scontent.fiev12-1.fna&oh=ff2837aad68d791dac6d4cb4b41df19b&oe=5FFF5F26" },
      { id: 3, name: "Lena", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/59637848_658070961302606_3329770574154039296_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=zCQov_592skAX_Wi6mb&_nc_ht=scontent.fiev12-1.fna&oh=b86305f5c67d5e11e849093f62bfc722&oe=5FFD6C5C" },
      { id: 4, name: "Dima", src: "https://scontent.fiev12-1.fna.fbcdn.net/v/t31.0-8/27023769_2052066251705498_8571303532211497264_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=59_s5GAC-JAAX_fuMMy&_nc_ht=scontent.fiev12-1.fna&oh=2019f6c553e1c784085a9eadf8451fc6&oe=5FFF5E33"}
   ]
}

const sidebarReducer = (state = defaultSidebar, action) => {
   return state;
}

export default sidebarReducer;