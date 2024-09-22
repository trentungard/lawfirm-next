import { ContentContainer } from "@/components/container/ContentContainer";
import { HomeMobileNavigation } from "@/components/navigation/HomeMobileNavigation";
import { HomeNavigation } from "@/components/navigation/HomeNavigation";
import { NavbarWrapper } from "@/components/navigation/NavbarWrapper";
import { Footer } from "@/components/sections/Footer";
import { Box, Heading, Text } from "@radix-ui/themes";

export default async function Privacy() {
  return (
    <main className="w-full">
        <NavbarWrapper>
            <HomeNavigation />
            <HomeMobileNavigation />
        </NavbarWrapper>
        <Box className="bg-black py-[100px]">
            <ContentContainer className='mt-[80px]'>
                <Heading className='text-white'>Privacy Policy</Heading>
            </ContentContainer>
        </Box>
        <ContentContainer className='my-10'>
            <Heading className="my-5">Effective Date: 09/21/2024</Heading>
            <Text>We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.</Text>
            <Heading className="my-5">Information We Collect</Heading>
            <Text>We collect personal information that you voluntarily provide to us when you:</Text>
            <ul>
                <li><Text>Use our website or services</Text></li>
                <li><Text>Contact us for support or inquiries</Text></li>
            </ul>
            <Text>This may include your name, email address, and any other details you provide when contacting us.</Text>
            <Text>We also automatically collect information, such as:</Text>
            <ul>
                <li><Text><strong>Cookies and Tracking Technologies: </strong>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.</Text></li>
                <li><Text><strong>Usage Data:</strong> Information about how you use our website, including IP addresses, browser types, and device information.</Text></li>
            </ul>
            <Heading className="my-5">How We Use Your Information</Heading>
            <Text>We use your personal information for the following purposes:</Text>
            <ul>
                <li><Text>To operate and provide our services</Text></li>
                <li><Text>To respond to your inquiries and support requests</Text></li>
                <li><Text>To analyze site usage and improve our services</Text></li>
                <li><Text>To protect our website from abuse, using tools like Google reCAPTCHA</Text></li>
            </ul>
            <Heading className="my-5">Sharing Your Information</Heading>
            <Text>We do not share or sell your personal information with third parties, except in the following circumstances:</Text>
            <ul><li><Text>With service providers who assist us in delivering our services (e.g., hosting, analytics)</Text></li></ul>
            <ul><li><Text>If required by law or to protect the safety, rights, or property of our users or the public</Text></li></ul>
            <Heading className="my-5">Google reCAPTCHA</Heading>
            <Text>We use Google reCAPTCHA to protect our site from spam and abuse. The reCAPTCHA service may collect information about you (such as your IP address and interactions with the site) for security purposes. This information is processed by Google and subject to their <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a  href="https://policies.google.com/terms">Terms of Service</a>.</Text>
            <Heading className="my-5">Your Rights</Heading>
            <Text>Depending on your location, you may have certain rights regarding your personal information, such as the right to:</Text>
            <ul>
                <li><Text>Access the information we hold about you</Text></li>
                <li><Text>Request correction of inaccurate data</Text></li>
                <li><Text>Request deletion of your personal data</Text></li>
            </ul>
            <Heading className="my-5">Changes to This Privacy Policy</Heading>
            <Text>We may update this Privacy Policy from time to time. The latest version will always be available on our website.</Text>
            <Text>If you have any questions or concerns, please contact us via our contact form</Text>
        </ContentContainer>
      <Footer />
    </main>
  );
}