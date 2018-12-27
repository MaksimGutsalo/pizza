let prods = [{
    id: 1,
    title: "Supreme",
    desription: "Pepperoni, seasoned pork, beef, mushrooms, green bell peppers and red onions.",
    image: require("../assets/images/product/SUPREME@2x.png"),
    price: 12.50,
    category: [{
            catStatus: true,
            className: "meat-ico cat-ico"
        },
        {
            catStatus: false,
            className: "veggie-ico cat-ico"
        },
        {
            catStatus: false,
            className: "hot-ico cat-ico"
        }
    ],
    size: [
        {
            name: "Small",
            value: "400mm"
        }
    ],
},
{
    id: 2,
    title: "Hawaiian chicken",
    desription: "Grilled chicken, ham, pineapple and green bell peppers.",
    image: require("../assets/images/product/HAWAIIAN-CHICKEN@2x.png"),
    price: 11.50,
    category: [{
            catStatus: true,
            className: "meat-ico cat-ico"
        },
        {
            catStatus: false,
            className: "veggie-ico cat-ico"
        },
        {
            catStatus: false,
            className: "hot-ico cat-ico"
        }
    ],
    size: [{
            name: "Medium",
            value: "600mm"
        }
    ]
},
{
    id: 3,
    title: "Veggie lover\"s",
    desription: "Mushrooms, red onions, green bell peppers, diced Roma tomatoes and black olives",
    image: require("../assets/images/product/VEGGIE-LOVER’S@2x.png"),
    price: 10.00,
    category: [{
            catStatus: false,
            className: "meat-ico cat-ico"
        },
        {
            catStatus: true,
            className: "veggie-ico cat-ico"
        },
        {
            catStatus: false,
            className: "hot-ico cat-ico"
        }
    ],
    size: [{
            name: "Medium",
            value: "600mm"
        }
    ]
},
{
    id: 4,
    title: "Meat lover\"s",
    desription: "Pepperoni, Italian sausage, ham, bacon, seasoned pork and beef.",
    image: require("../assets/images/product/MEAT-LOVER’S@2x.png"),
    price: 11.50,
    category: [{
            catStatus: true,
            className: "meat-ico cat-ico"
        },
        {
            catStatus: false,
            className: "veggie-ico cat-ico"
        },
        {
            catStatus: false,
            className: "hot-ico cat-ico"
        }
    ],
    size: [{
            name: "Large",
            value: "800mm"
        }
    ]
},
{
    id: 5,
    title: "Ultimate cheese",
    desription: "50% more cheese. With garlic Parmesan sauce and toasted Parmesan crust finisher.",
    image: require("../assets/images/product/ULTIMATE-CHEESE@2x.png"),
    price: 11.50,
    category: [{
            catStatus: false,
            className: "meat-ico cat-ico"
        },
        {
            catStatus: true,
            className: "veggie-ico cat-ico"
        },
        {
            catStatus: false,
            className: "hot-ico cat-ico"
        }
    ],
    size: [{
            name: "Large",
            value: "800mm"
        }
    ]
},
{
    id: 6,
    title: "Buffalo chicken",
    desription: "Grilled chicken, banana peppers and red onions. With Buffalo sauce.",
    image: require("../assets/images/product/BUFFALO CHICKEN@2x.png"),
    price: 11.50,
    category: [{
            catStatus: true,
            className: "meat-ico cat-ico",
            name: "Meat"
        },
        {
            catStatus: false,
            className: "veggie-ico cat-ico"
        },
        {
            catStatus: true,
            className: "hot-ico cat-ico",
            name: 'Hot'
        }
    ],
    size: [{
            name: "Large",
            value: "800mm"
        }
    ]
},
{
    id: 7,
    title: "Backyard BBQ",
    desription: "Grilled chicken, bacon and red onions. With barbeque sauce.",
    image: require("../assets/images/product/BACKYARD BBQ @2x.png"),
    price: 12.00,
    category: [{
            catStatus: true,
            className: "meat-ico cat-ico",
            name: "Meat"
        },
        {
            catStatus: false,
            className: "veggie-ico cat-ico"
        },
        {
            catStatus: false,
            className: "hot-ico cat-ico"
        }
    ],
    size: [{
            name: "Large",
            value: "800mm"
        }
    ]
},
{
    id: 8,
    title: "Canadies",
    desription: "With garlic Parmesan sauce and toasted Parmesan crust finisher.",
    image: require("../assets/images/product/CANADIES@2x.png"),
    price: 12.50,
    category: [{
            catStatus: true,
            className: "meat-ico cat-ico"
        },
        {
            catStatus: false,
            className: "veggie-ico cat-ico"
        },
        {
            catStatus: true,
            className: "hot-ico cat-ico"
        }
    ],
    size: [{
            name: "Large",
            value: "800mm"
        }
    ]
},
{
    id: 9,
    title: "Paperoni",
    desription: "Pepperoni, Italian sausage, red onions, mushrooms, green bell peppers and black olives.",
    image: require("../assets/images/product/PEPERONI@2x.png"),
    price: 13.50,
    category: [{
            catStatus: true,
            className: "meat-ico cat-ico"
        },
        {
            catStatus: false,
            className: "veggie-ico cat-ico"
        },
        {
            catStatus: false,
            className: "hot-ico cat-ico"
        }
    ],
    size: [{
            name: "Large",
            value: "800mm"
        }
    ]
},
{
    id: 10,
    title: "Toscana",
    desription: "Mushrooms, red onions, green bell peppers, ham, bacon, seasoned pork and beef.",
    image: require("../assets/images/product/TOSCANA@2x.png"),
    price: 11.50,
    category: [{
            catStatus: true,
            className: "meat-ico cat-ico"
        },
        {
            catStatus: false,
            className: "veggie-ico cat-ico"
        },
        {
            catStatus: false,
            className: "hot-ico cat-ico"
        }
    ],
    size: [{
            name: "Large",
            value: "800mm"
        },
        {
            name: "Medium",
            value: "600mm"
        },
        {
            name: "Small",
            value: "400mm"
        }
    ]
}

]
export default prods;
