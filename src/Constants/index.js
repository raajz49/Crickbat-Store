import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bat1,bat2,bat3,smith,ellyse, marnus,  dhoni2, bat4,bat5,bat6, bat7} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const bats= [
    {
        thumbnail: bat1,
        bigBat: bat1,
    },
    {
        thumbnail: bat2,
        bigBat: bat2,
        heightClass: 'h-96'
    },
    {
        thumbnail: bat3,
        bigBat: bat3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: bat4,
        name: "SS Air IPL-10",
        price: "$200.20",
    },
    {
        imgURL: bat5,
        name: "Spartan-5 BBL",
        price: "$210.20",
    },
    {
        imgURL: bat6,
        name: "Black-Mamba-5",
        price: "$220.20",
    },
    {
        imgURL: bat7,
        name: "Labuchangne-16",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL:smith ,
        customerName: 'Steve Smith',
        rating: 4.5,
        feedback: "Raajz Bat Pasal offers top-notch  cricket bats with impressive quality. "
    },
    
    {
        imgURL: marnus,
        customerName: 'Marnus Labuchange',
        rating: 4.5,
        feedback: "The excellent customer service at Raajz Bat Pasal sets them apart."
    },

    {
        imgURL: ellyse,
        customerName: 'Ellyse Perry',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: dhoni2,
        customerName: 'MS Dhoni(Thala)',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Gray-Nicolls", link: "/" },
            { name: "Kookaburra", link: "/" },
            { name: "Gunn & Moore", link: "/" },
            { name: "DSC Condor Pro", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "New Balance DC", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@raajz.com", link: "mailto:customer@raajz.com" },
            { name: "+9779819262837", link: "tel:+9779819262837" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];