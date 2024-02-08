import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div style="font-family: Bree-Serif">
    <p id="aboutus" class= " font-bold text-2xl ">About Us - Generosity</p><br>
At Generosity, we believe in the immense power of kindness and the profound impact it can have on individuals and communities. Our platform is not just a donation hub; it's a movement, a commitment to creating positive change in the world.
<br><br>
<p id="ourmission" class= " font-bold text-2xl ">Our Mission</p><br>
Empowering Change Through Generosity<br>

Generosity was born out of a simple yet powerful idea: to connect those who have the means to make a difference with those in need. We envision a world where compassion knows no bounds and everyone has the opportunity to thrive.
<br><br>
<p class= " font-bold text-2xl ">Who We Are</p><br>
At the heart of Generosity is a team driven by a passion for social impact. We are a diverse group of individuals united by the belief that small acts of generosity can spark significant change. From developers and designers to community managers and philanthropy experts, our team collaborates to create a platform that fosters a culture of giving.
<br><br>
<p class= " font-bold text-2xl ">What Sets Us Apart</p><br>
Innovative Solutions, Real-world Impact
<br><br>
Generosity goes beyond traditional donation platforms. We leverage technology to create innovative solutions that make giving accessible, transparent, and impactful. Our commitment to transparency ensures that every contribution directly benefits those in need.
<br><br>
<div class = "bg-blue-300/70 pb-9 shadow-lg shadow-blue-300/70 w-full" style="box-shadow: 5px 5px 50px rgba(125, 211, 252, 0.9), -10px -10px 50px rgba(125, 211, 252, 2.5);">
<p id="corevalues" class= " font-bold text-2xl text-center">Core Values</p><br>
<div class="grid gap-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 items-center justify-center">
<button><p>1. Compassion: We approach our work with empathy and understanding, recognizing the unique challenges individuals and communities face.</p></button>

<button><p>2. Transparency: We believe in openness and accountability, ensuring that every donation is utilized effectively and ethically.</p></button>

<button><p>3. Collaboration: Change happens when people come together. We actively seek partnerships and collaborations to amplify our impact.</p></button>

<button><p>4. Innovation: We embrace new ideas and technologies to continually improve our platform and create a seamless giving experience.</p></button>
</div>
</div>
<br>
<p class= " font-bold text-2xl ">How It Works</p><br>
Generosity provides a user-friendly platform where individuals, businesses, and organizations can discover, support, and initiate causes that resonate with them. From supporting educational initiatives to aiding disaster relief efforts, our platform covers a wide spectrum of causes.
<br><br>
<p class= " font-bold text-2xl ">Join the Generosity Movement</p><br>
Whether you're an individual looking to make a difference, a business seeking impactful corporate social responsibility initiatives, or a nonprofit aiming to expand your reach, Generosity welcomes you to join our movement. Together, let's create a world where generosity knows no bounds.
<br><br><br>
<p class= " font-semibold text-xl">Thank you for being a part of Generosity — where every act of kindness contributes to a brighter, more compassionate future.</p>
    </div>
  `,
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
 
}
