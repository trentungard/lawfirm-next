import { ContentContainer } from "@/components/container/ContentContainer";
import { HomeMobileNavigation } from "@/components/navigation/HomeMobileNavigation";
import { HomeNavigation } from "@/components/navigation/HomeNavigation";
import { NavbarWrapper } from "@/components/navigation/NavbarWrapper";
import { Footer } from "@/components/sections/Footer";
import { Box, Heading, Text } from "@radix-ui/themes";

export default async function Terms() {
  return (
    <main className="w-full">
        <NavbarWrapper>
            <HomeNavigation />
            <HomeMobileNavigation />
        </NavbarWrapper>
        <Box className="bg-black py-[100px]">
            <ContentContainer className='mt-[80px]'>
                <Heading className='text-white'>Terms Of Service</Heading>
            </ContentContainer>
        </Box>
        <ContentContainer className='my-10'>
            <Heading className="my-5">Effective Date: 09/21/2024</Heading>
            <Text>{`These Terms of Service ("Terms") govern your use of our website and services.`}</Text>
            <Heading className="my-5">1. Acceptance of Terms</Heading>
            <Text>By using our website or services, you agree to these Terms. If you do not agree to these Terms, please do not use our services.</Text>
            <Heading className="my-5">2. Use of the Website</Heading>
            <Text>You agree to use the website for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the site.</Text>
            <ul>
                <li><Text>You must not engage in any unlawful activities, including hacking, transmitting viruses, or spamming.</Text></li>
                <li><Text>You must not attempt to gain unauthorized access to any part of the site, other accounts, or networks connected to the website.</Text></li>
            </ul>
            <Heading className="my-5">3. Intellectual Property</Heading>
            <Text>All content on this website, including text, graphics, logos, and software, is the property of Lovecchio Law or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or otherwise use our content without explicit permission.</Text>
            <Heading className="my-5">4. Disclaimers</Heading>
            <Text>{`The content on this website is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the website will be error-free, secure, or available at all times.`}</Text>
            <Heading className="my-5">5. Limitation of Liability</Heading>
            <Text>To the fullest extent permitted by law, Lovecchio Law shall not be liable for any damages (including direct, indirect, incidental, or consequential damages) arising from the use or inability to use the website or services.</Text>
            <Heading className="my-5">6. Termination</Heading>
            <Text>We reserve the right to suspend or terminate your access to the website if you violate these Terms or engage in prohibited activities.</Text>
            <Heading className="my-5">7. Third-Party Services</Heading>
            <Text>Our website may use third-party services, such as Google reCAPTCHA, to protect our site from spam and abuse. These services may collect certain information about users, including, but not limited to, IP addresses, user interactions, and cookies. The data collected by these services is processed by the third party in accordance with their own privacy policies.</Text>
            <ul className='mt-3'>
                <li><Text><strong>Google reCAPTCHA:</strong>{`Google reCAPTCHA is used on our site to prevent spam and abuse. The use of reCAPTCHA is governed by Google's `} <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a  href="https://policies.google.com/terms">Terms of Service</a>. By using our site, you also agree to the use of reCAPTCHA and the collection of data associated with it.</Text></li>
                <li><Text><strong>Other Third-Party Services:</strong> We may use other third-party services for analytics, advertising, or other purposes. These services may use cookies or similar technologies to collect information about your interactions with our website. The data collected is subject to the privacy policies of these third parties.</Text></li>
            </ul>
            <Text>You can manage your cookie preferences in your browser settings. However, disabling cookies may affect your ability to use some features of our website.</Text>
            <Heading className="my-5">8. Changes to the Terms</Heading>
            <Text>We may modify these Terms from time to time. Any changes will be effective immediately upon posting. Your continued use of the site constitutes acceptance of the revised Terms.</Text>
            <Heading className="my-5">9. Contact Information</Heading>
            <Text>If you have any questions about these Terms, please contact us via our contact form</Text>
        </ContentContainer>
      <Footer />
    </main>
  );
}
