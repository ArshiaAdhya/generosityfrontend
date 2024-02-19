import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ReceivePageComponent } from './receive-page/receive-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { ProfilePageDonorsComponent } from './profile-page-donors/profile-page-donors.component';
import { ProfilePageNgosComponent } from './profile-page-ngos/profile-page-ngos.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: LandingPageComponent,
    },
    {
        path: 'login_or_signup',
        title: 'Login/Signup',
        component: LoginSignupComponent,  
    },
    {
        path: 'receive',
        title: 'Receive',
        component: ReceivePageComponent,
    },
    {
        path: 'donate',
        title: 'donate',
        component: DonatePageComponent,
    },
    {
        path: 'donor_profile',
        title: 'Donor Profile',
        component: ProfilePageDonorsComponent,
    },
    {
        path: 'ngo_profile',
        title: 'NGO\'s Profile',
        component: ProfilePageNgosComponent,
    },
    {
        path: 'contact_us',
        title: 'Contact Us',
        component: ContactUsComponent,
    },
];
