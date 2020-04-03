const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://thefader-res.cloudinary.com/private_images/w_2400,c_limit,f_auto,q_auto:best/Champion8_RAW_kex8dc/cardigans-champion-earrings-closer-by-wwake-hoops-craven-iteri-choker-lady-grey.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://thefader-res.cloudinary.com/private_images/w_1800,c_limit,f_auto,q_auto:eco/Rock2_RAW_ekn6hm/sweater-l-l-bean-jacket-nautica-pants-adidas-equipment-hat-nike-acg-shoes-nike-x-acronym.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default directoryReducer;