
"use client";

import React from 'react';
import { Button as UiButton } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

import Example from "@/components/Example";
import thirdwebIcon from "@/../public/thirdweb.svg";
import Image from "next/image";
import Features from '@/components/Features';
import Footer from '@/components/Footer';



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "solid" | "outline";
}

const Button: React.FC<ButtonProps> = ({ variant = "solid", children, className, ...props }) => {
  const variantClass = 
    variant === "ghost" ? "bg-transparent text-gray-600" : 
    variant === "outline" ? "border border-gray-600" : 
    "bg-black text-white"; // Black button color

  return (
    <button 
      className={`px-4 py-2 rounded ${variantClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

const Navbar = () => (
  <nav className="flex items-center justify-between p-4 w-full mx-auto bg-white text-black">
    <div className="flex items-center">
      <h1 className="text-2xl font-bold">
        <span className="text-gray-800">K</span>
        <span className="text-black">arya Proof</span>
      </h1>
    </div>
    <div className="flex space-x-6">
      <a href="#" className="text-black hover:text-gray-500 border-b-3 border-black">Home</a>
      <a href="/Features" className="text-black hover:text-gray-500">About</a>
      <a href="#" className="text-black hover:text-gray-500">Contact Us</a>
      <a href="#" className="text-black hover:text-gray-500">Blog</a>
    </div>
    <div className="flex space-x-4">
      <Example />
      <Button variant="ghost">Sign in</Button>
    </div>
  </nav>
);

const SearchSection = () => (
  <div className="flex space-x-4 mt-8">
    <Select>
      <SelectTrigger className="w-[200px] bg-white text-black border border-gray-300">
        <SelectValue placeholder="Select Job type" />
      </SelectTrigger>
    </Select>
    <Select>
      <SelectTrigger className="w-[200px] bg-white text-black border border-gray-300">
        <SelectValue placeholder="Location" />
      </SelectTrigger>
    </Select>
    <Button className="bg-black hover:bg-gray-800">Explore</Button> {/* Black button */}
  </div>
);

const NotificationBubble : React.FC<{ avatar: string; text: string; position: string }> = ({ avatar, text, position }) => (
  <div className={`absolute ${position} flex items-center bg-white rounded-lg p-2 shadow-lg`}>
    <img src={avatar} alt="User avatar" className="w-8 h-8 rounded-full" />
    <span className="ml-2 text-sm text-black">{text}</span>
  </div>
);

const MainContent = () => (
  <div className="relative flex justify-between items-center max-w-7xl mx-auto px-6 py-16 bg-white text-black">
    <div className="mr-[4px]"> 
      <h1 className="text-5xl font-extrabold mb-4 tracking-wide leading-tight">
        Verifying Tasks Submission
      </h1>
      <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed">
        A platform for companies to request tasks from candidates and verify the authenticity of their submissions using <span className="font-bold text-black">blockchain technology</span>, ensuring no plagiarism and clear tracking of work.
      </p>
      <div className="flex space-x-4">
        <Select>
          <SelectTrigger className="w-[200px] bg-white text-black border border-gray-300">
            <SelectValue placeholder="Select Job type" />
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px] bg-white text-black border border-gray-300">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
        </Select>
        <Button className="bg-black hover:bg-gray-800 text-white font-semibold">Explore</Button>
      </div>
    </div>
    <div className="w-1/2 relative">
      <div className="relative w-[500px] h-[500px] bg-gray-100 rounded-full border-spacing-1 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/landing pic.png"
          alt="Verifying Submission"
          width={450}
          height={500}
          className="object-cover rounded-full"
        />
      </div>
    </div>
  </div>
);

const StatCard: React.FC<{ icon: string; number: string | number; label: string }> = ({ icon, number, label }) => (
  <Card className="w-[500px] bg-white shadow-lg border border-gray-300">
    <CardContent className="flex items-center space-x-4 p-6">
      <div className={`p-3 rounded-lg ${icon === "briefcase" ? "bg-gray-300" : 
        icon === "users" ? "bg-gray-400" : "bg-gray-500"}`}>
        {/* Icon SVG */}
      </div>
      <div>
        <h3 className="text-3xl font-extrabold text-black">{number}</h3>
        <p className="text-lg text-gray-500 font-semibold">{label}</p>
      </div>
    </CardContent>
  </Card>
);


const Stats = () => (
  <div className="flex justify-center space-x-8 mt-16 bg-white text-black">
    <StatCard icon="briefcase" number="20K +" label="Tasks Submitted" />
    <StatCard icon="users" number="2K +" label="People Hired" />
    <StatCard icon="building" number="2K +" label="Companies" />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-black">
      <Navbar />
      <main className="w-full px-0">
        <MainContent />
        <Stats />
        <Features />
        <Footer />
      </main>
    </div>
  );
}
