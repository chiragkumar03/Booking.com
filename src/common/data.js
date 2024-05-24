import React from "react";

import a1 from "./images1/a1.jpg"
import a2 from "./images1/a2.jpg"
import a3 from "./images1/a3.jpg"
import a4 from "./images1/a4.jpg"
import a5 from "./images1/a5.jpg"

import h1 from "./images1/h1.jpg"
import h2 from "./images1/h2.jpg"
import h3 from "./images1/h3.jpg"
import h4 from "./images1/h4.jpg"
import h5 from "./images1/h5.jpg"

import d1 from "./images1/d1.jpg"
import d2 from "./images1/d2.jpg"
import d3 from "./images1/d3.jpg"
import d4 from "./images1/d4.jpg"
import d5 from "./images1/d5.jpg"

import m1 from "./images1/m1.jpg"
import m2 from "./images1/m2.jpg"
import m3 from "./images1/m3.jpg"
import m4 from "./images1/m4.jpg"
import m5 from "./images1/m5.jpg"

import j1 from "./images1/j1.jpg"
import j2 from "./images1/j2.jpg"
import j3 from "./images1/j3.jpg"
import j4 from "./images1/j4.jpg"
import j5 from "./images1/j5.jpg"

const data = {
    Agra:[
        {id:"1", img:a1, price:"12,000",area:"/2345sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Agra",persqr:"₹ 250/sqft",face:"North",bedroom:"3",washroom:"3"},
        {id:"2", img:a2, price:"56,000",area:"/2395sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Agra",persqr:"₹ 220/sqft",face:"west",bedroom:"1",washroom:"1"},
        {id:"3", img:a3, price:"26,000",area:"/2305sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Agra",persqr:"₹ 210/sqft",face:"East",bedroom:"2",washroom:"2"},
        {id:"4", img:a4, price:"16,000",area:"/2545sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Agra",persqr:"₹ 150/sqft",face:"North",bedroom:"5",washroom:"3"},
        {id:"5", img:a5, price:"26,000",area:"/2565sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Agra",persqr:"₹ 220/sqft",face:"west",bedroom:"1",washroom:"1"}
    ],
    Haryana:[
        {id:"1", img:h1, price:"16,000",area:"/2345sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Haryana",persqr:"₹ 255/sqft",face:"North",bedroom:"1",washroom:"2"},
        {id:"2", img:h2, price:"26,000",area:"/2345sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Haryana",persqr:"₹ 220/sqft",face:"North",bedroom:"2",washroom:"2"},
        {id:"3", img:h3, price:"66,000",area:"/2345sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Haryana",persqr:"₹ 210/sqft",face:"west",bedroom:"3",washroom:"4"},
        {id:"4", img:h4, price:"36,000",area:"/2345sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Haryana",persqr:"₹ 150/sqft",face:"East",bedroom:"2",washroom:"5"},
        {id:"5", img:h5, price:"11,000",area:"/2345sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Haryana",persqr:"₹ 210/sqft",face:"East",bedroom:"1",washroom:"3"}
    ],
    Jaipur:[
        {id:"1", img:j1, price:"34,000",area:"/1345sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Jaipur",persqr:"₹ 251/sqft",face:"East",bedroom:"1",washroom:"1"},
        {id:"2", img:j2, price:"64,000",area:"/2345sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Jaipur",persqr:"₹ 120/sqft",face:"East",bedroom:"2",washroom:"2"},
        {id:"3", img:j3, price:"53,000",area:"/2345sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Jaipur",persqr:"₹ 230/sqft",face:"North",bedroom:"1",washroom:"2"},
        {id:"4", img:j4, price:"25,000",area:"/4345sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Jaipur",persqr:"₹ 450/sqft",face:"west",bedroom:"4",washroom:"5"},
        {id:"5", img:j5, price:"33,000",area:"/445sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Jaipur",persqr:"₹ 550/sqft",face:"East",bedroom:"1",washroom:"4"}
    ],
    Delhi:[
        {id:"1", img:d1, price:"66,000",area:"/2235sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Delhi",persqr:"₹ 350/sqft",face:"East",bedroom:"1",washroom:"3"},
        {id:"2", img:d2, price:"23,000",area:"/3735sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Delhi",persqr:"₹ 250/sqft",face:"East",bedroom:"1",washroom:"4"},
        {id:"3", img:d3, price:"61,000",area:"/2435sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Delhi",persqr:"₹ 150/sqft",face:"East",bedroom:"2",washroom:"2"},
        {id:"4", img:d4, price:"51,000",area:"/2234sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Delhi",persqr:"₹ 450/sqft",face:"North",bedroom:"3",washroom:"2"},
        {id:"5", img:d5, price:"15,000",area:"/1235sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Delhi",persqr:"₹ 350/sqft",face:"west",bedroom:"3",washroom:"2"}
    ],
    Mumbai:[
        {id:"1", img:m1, price:"51,000",area:"/2235sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Mumbai",persqr:"₹ 150/sqft",face:"East",bedroom:"3",washroom:"3"},
        {id:"2", img:m2, price:"41,000",area:"/3234sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Mumbai",persqr:"₹ 350/sqft",face:"North",bedroom:"4",washroom:"2"},
        {id:"3", img:m3, price:"33,000",area:"/2335sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Mumbai",persqr:"₹ 250/sqft",face:"west",bedroom:"3",washroom:"1"},
        {id:"4", img:m4, price:"21,000",area:"/3045sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Mumbai",persqr:"₹ 550/sqft",face:"East",bedroom:"1",washroom:"1"},
        {id:"5", img:m5, price:"45,000",area:"/1445sqft",desc:"Commercial Office Space For Rent in Lodha Supremus Lower Parel fwefwe ele wfdf thjhyj ku, Lower Parel, Mumbai",persqr:"₹ 150/sqft",face:"East",bedroom:"3",washroom:"2"}
    ]
}


export default data;