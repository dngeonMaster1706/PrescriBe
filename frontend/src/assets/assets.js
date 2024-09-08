import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Kumar',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kumar is dedicated to providing comprehensive healthcare with a focus on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '17th Cross, Koramangala',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Sharma focuses on delivering quality healthcare with a strong emphasis on preventive care and patient education.',
        fees: 600,
        address: {
            line1: '27th Cross, JP Nagar',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Nihal Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Patel specializes in skin care and treatment, with a focus on providing holistic dermatological solutions.',
        fees: 300,
        address: {
            line1: '37th Cross, Indiranagar',
            line2: '100 Feet Road, Bengaluru'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Arjun Singh',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Singh is passionate about child healthcare, providing expert care and guidance for newborns, infants, and adolescents.',
        fees: 400,
        address: {
            line1: '47th Cross, Basavanagudi',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Kavita Rao',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rao has expertise in treating neurological disorders, focusing on delivering personalized care and effective treatment plans.',
        fees: 500,
        address: {
            line1: '57th Cross, Malleswaram',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Anil Mehta',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Mehta is dedicated to providing quality care in neurology, with a focus on early diagnosis and personalized treatment.',
        fees: 500,
        address: {
            line1: '57th Cross, Malleswaram',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Suresh Iyer',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Iyer is committed to providing comprehensive primary care with a focus on preventive health and patient well-being.',
        fees: 500,
        address: {
            line1: '17th Cross, Koramangala',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Suraj Nair',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Nair provides specialized care for women, focusing on both preventive care and treatment strategies.',
        fees: 600,
        address: {
            line1: '27th Cross, JP Nagar',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ananya Gupta',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Gupta specializes in providing dermatological solutions with a focus on improving skin health and appearance.',
        fees: 300,
        address: {
            line1: '37th Cross, Indiranagar',
            line2: '100 Feet Road, Bengaluru'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rohan Malhotra',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Malhotra provides expert care for children, ensuring their growth and development through specialized medical treatment.',
        fees: 400,
        address: {
            line1: '47th Cross, Basavanagudi',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Anjali Verma',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Verma is skilled in treating various neurological conditions, providing patient-centered care and effective treatments.',
        fees: 500,
        address: {
            line1: '57th Cross, Malleswaram',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Rakesh Bhatt',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Bhatt is a dedicated neurologist with expertise in diagnosing and treating a wide range of neurological disorders.',
        fees: 500,
        address: {
            line1: '57th Cross, Malleswaram',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Meena Desai',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Desai is dedicated to providing holistic healthcare with a focus on preventive medicine and patient education.',
        fees: 500,
        address: {
            line1: '17th Cross, Koramangala',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Pankaj Jain',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Jain offers personalized gynecological care, ensuring the health and well-being of women at every stage of life.',
        fees: 600,
        address: {
            line1: '27th Cross, JP Nagar',
            line2: 'Ring Road, Bengaluru'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Akshara Sharma',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Sharma is personalized dermatological treatments with a focus on improving skin health and treating various skin conditions.',
        fees: 300,
        address: {
            line1: '37th Cross, Indiranagar',
            line2: '100 Feet Road, Bengaluru'
        }
    }
];

