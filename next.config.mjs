/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["localhost"], // Add your Strapi server's domain here
	},
};

export default nextConfig;
