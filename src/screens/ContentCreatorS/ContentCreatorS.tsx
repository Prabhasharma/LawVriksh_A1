import { PenToolIcon, SearchIcon, BellIcon } from "lucide-react";

import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const ContentCreatorS = (): JSX.Element => {
  const socialMedia = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
      alt: "Facebook",
      bgImage: "/rectangle-41-1.png",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      alt: "Linkedin",
      bgImage: "/rectangle-40-2.png",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
      alt: "Twitter",
      bgImage: "/rectangle-41-2.png",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg",
      alt: "Mail",
      bgImage: "/rectangle-40-1.png",
    },
  ];


  // Article data
  const articles = [
    {
      image: "/rectangle-64.png",
      title: "Understanding the role of AI in software development",
      time: "09:00 AM",
      readTime: "12 min read",
    },
    {
      image: "/rectangle-65.png",
      title: "Understanding the role of AI in software development",
      time: "09:00 AM",
      readTime: "12 min read",
    },
    {
      image: "/rectangle-66.png",
      title: "Understanding the role of AI in software development",
      time: "09:00 AM",
      readTime: "12 min read",
    },
  ];

  // Recent activities data
  const activities = [
    { date: "Jul 6", title: "My GitHub Setup, Tricks & Daily Commands" },
    { date: "Oct 27 2024", title: "My GitHub Setup, Tricks & Daily Commands" },
    { date: "Oct 27 2024", title: "My GitHub Setup, Tricks & Daily Commands" },
    { date: "Oct 27 2024", title: "My GitHub Setup, Tricks & Daily Commands" },
    { date: "Oct 27 2024", title: "My GitHub Setup, Tricks & Daily Commands" },
  ];

  return (
    <div className="bg-[#fffaea] flex flex-row justify-center w-full">
  <div className="bg-[#fffaea] w-[1469px] h-[1144px] relative">
    {/* Header with search, notifications and profile */}
    <div className="absolute w-fit h-[46px] top-[15px] left-[1211px] flex items-center justify-end gap-3">
      
      {/* Search icon background */}
      <div className="relative w-[46px] h-[46px] bg-[url(/search.svg)] bg-cover bg-[50%_50%]">
        <div className="relative w-6 h-6 top-[11px] left-[11px] bg-[url(/search.svg)] bg-[100%_100%]" />
      </div>

      {/* Notification icon */}
      <div className="relative w-[46px] h-[46px] bg-white rounded-full shadow-md flex items-center justify-center">
        <BellIcon className="w-[22px] h-[22px] text-[#3d3d3d]" />
      </div>

      {/* Profile Avatar */}
      <Avatar className="w-[46px] h-[46px]">
        <AvatarImage src="/rectangle-39.png" alt="User profile" />
        <AvatarFallback>RF</AvatarFallback>
      </Avatar>
    </div>


       {/* Follow button */}
<Button className="absolute top-[459px] left-[1030px] rounded-[1000px] bg-transparent border border-[#d4af37] text-[#d4af37] font-normal text-base tracking-[-0.80px] hover:none focus:outline-none">
  Follow
</Button>


        {/* Timeline elements */}
        <div className="absolute w-[25px] h-[70px] top-[611px] left-[1057px]">
          <div className="absolute w-[3px] h-[39px] top-[31px] left-[11px] rounded-[1000px] bg-[url(..//contact-us.png)] bg-cover bg-[50%_50%]" />
          <div className="absolute top-0 left-0 font-normal text-[#544528] text-xs tracking-[0.60px]">
            
          </div>
        </div>

        <div className="absolute w-[3px] h-[39px] top-[722px] left-[1068px] rounded-[1000px] bg-[url(..//contact-us.png)] bg-cover bg-[50%_50%]" />

        {/* Social media icons */}
        <div className="absolute w-[213px] h-[59px] top-[297px] left-[133px] rounded-[1000px] flex items-center">
          {socialMedia.map((social, index) => (
            <div
              key={`social-${index}`}
              className={`absolute w-[46px] h-[46px] top-1.5 left-[${index * 51 + 7}px] bg-[url(${social.bgImage})] bg-[100%_100%]`}
              style={{ left: `${index * 51 + 7}px` }}
            >
              <img
                className="absolute w-[30px] h-[30px] top-2 left-2"
                alt={social.alt}
                src={social.icon}
              />
            </div>
          ))}
        </div>

        {/* Follower count */}
        <div className="absolute w-[139px] top-[346px] left-[1030px] font-normal text-[#544528] text-base tracking-[0.80px]">
          621 Followers
        </div>

       {/* Recent Activity Item */}
<div className="">

  {/* Date on left */}
  {/* <div className="absolute left-[-60px] top-0 font-normal text-[#544528] text-xs tracking-[0.60px] leading-[18px]">
    Oct 27 2024
  </div> */}

  {/* Content block */}
  <div className="flex items-start gap-2">

    {/* Icon */}
    {/* <PenToolIcon className="w-[18px] h-[18px] text-[#544528] mt-[2px]" /> */}

    {/* Texts */}
    <div className="flex flex-col gap-[4px]">
      <div className="font-normal text-[#544528] text-xs tracking-[0.60px] leading-[18px]">
        {/* Wrote an article */}
      </div>

      <a
        // className="font-normal text-[#544528] text-xs tracking-[0.60px] underline leading-[18px]"
        // href="https://ksridhar.dev/my-github-setup-tricks-and-daily-commands-cmcrbn4u5000602kybl543zxu"
        // rel="noopener noreferrer"
        // target="_blank"
      >
        {/* My GitHub Setup, Tricks & Daily Commands */}
      </a>
    </div>
  </div>
</div>



        {/* Bio information */}
<div className="absolute w-[352px] top-[388px] left-[1030px] font-normal text-[#544528] text-base tracking-[0.5px] leading-[20px]">
  His Bio | Author | Writer | Poet | Entrepreneur | Developer
</div>


        {/* User name */}
        <div className="absolute w-[299px] top-[307px] left-[1030px] font-normal text-black text-[25px] tracking-[-1.25px] leading-8">
          Robert&nbsp;&nbsp;Fox
        </div>

        {/* Recent Activities section */}
        <div className="absolute w-[352px] h-8 top-[546px] left-[1030px]">
          <div className="absolute w-[299px] top-0 left-0 font-normal text-black text-[25px] tracking-[-1.25px] leading-8">
            Recent&nbsp;&nbsp;&nbsp;&nbsp;Activities
          </div>

          <Button className="absolute top-[5px] left-[295px] rounded-[1000px] h-[25px] px-4 py-0.5 border border-[#d4af37] text-[#d4af37] text-sm font-medium bg-transparent">
  Add
</Button>

        </div>

        {/* Navigation menu */}
        <div className="absolute w-[371px] h-[23px] top-[30px] left-[549px] flex justify-center space-x-10">
  <span className="w-[61px] h-3.5 text-center text-sm font-medium">Home</span>
  <span className="w-[97px] h-[15px] text-center text-sm font-medium">About Us</span>
  <span className="w-[121px] h-3.5 text-center text-sm font-medium">Contact Us</span>
</div>


        {/* Profile picture */}
    {/* Profile picture */}
<div
  className="absolute w-[130px] h-[130px] top-[148px] left-[1030px] bg-[url('https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740')] bg-cover bg-center rounded-full"
>
  <div
    className="absolute w-10 h-10 top-[90px] left-[90px] bg-[url('https://cdn-icons-png.flaticon.com/512/1828/1828817.png')] bg-cover bg-center rounded-full"
  >
    <img
      className="absolute w-[22px] h-[22px] top-[9px] left-[9px]"
      alt="Plus icon"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsphbe-dQQ8bofFFkB2rDWLWEjE0t0OLWqQ&s"
    />
  </div>
</div>



        {/* Page title */}
        <h1 className="absolute w-[278px] h-[35px] top-[148px] left-[131px] [-webkit-text-stroke:0.5px_#000000] font-normal text-black text-3xl tracking-[2.10px] leading-[35.1px] whitespace-nowrap">
          Robert Fox&apos;s Page
        </h1>

        {/* Article cards - Corporate Law section */}
<div
  className="absolute w-[813px] h-[266px] top-[524px] left-[132px] flex items-start gap-[14px]"
>
  {articles.map((article, index) => (
    <Card
      key={index}
      className="w-[262px] h-[266px] bg-transparent border-none flex flex-col"
    >
      <img
        className="w-full h-[173px] object-cover"
        alt="Article thumbnail"
        src="https://i.pinimg.com/736x/60/29/09/602909572c496cd022162ebedacf64dd.jpg"
      />
      <CardContent className="p-0 mt-[11px] flex flex-col flex-grow justify-between">
        <h3 className="font-normal text-black text-xl leading-[23.4px]">
          {article.title}
        </h3>
        <div className="flex gap-[10px] font-normal text-[#848078] text-xs tracking-[0.60px]">
          <span>{article.time}</span>
          <span>{article.readTime}</span>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

{/* Article cards - Constitutional Law section */}
<div className="absolute w-[813px] h-[173px] top-[863px] left-[132px] flex gap-[14px]">
  {[
    {
      title: "Fundamental Rights in India",
      time: "10:00 AM",
      readTime: "8 min read",
      image:
        "https://i.pinimg.com/736x/2d/3c/a7/2d3ca71107702cc622e848fb66d3b011.jpg", // courtroom/law-related
    },
    {
      title: "Role of Constitution in Modern Law",
      time: "11:30 AM",
      readTime: "10 min read",
      image:
        "https://i.pinimg.com/736x/9e/c9/c5/9ec9c5eaa67f6f0f192c1f6d44261d52.jpg", // legal documents
    },
    {
      title: "Evolution of Indian Judiciary",
      time: "12:15 PM",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=600&q=80", // scales or judge
    },
  ].map((article, index) => (
    <img
      key={`const-article-${index}`}
      className="w-[262px] h-[173px] object-cover rounded-lg"
      alt={article.title}
      src={article.image}
    />
  ))}
</div>

{/* Article metadata for Constitutional Law section */}
<div className="absolute top-[1047px] left-[132px] flex gap-[14px]">
  {[
    {
      title: "Fundamental Rights in India",
      time: "10:00 AM",
      readTime: "8 min read",
    },
    {
      title: "Role of Constitution in Modern Law",
      time: "11:30 AM",
      readTime: "10 min read",
    },
    {
      title: "Evolution of Indian Judiciary",
      time: "12:15 PM",
      readTime: "7 min read",
    },
  ].map((article, index) => (
    <div
      key={`const-meta-${index}`}
      className="flex flex-col w-[262px] items-start gap-[4px]"
    >
      <h3 className="font-normal text-black text-xl leading-[23.4px]">
        {article.title}
      </h3>
      <div className="text-[#848078] text-xs tracking-[0.60px]">
        {article.time} • {article.readTime}
      </div>
    </div>
  ))}
</div>


        {/* Logo */}
<img
  className="absolute w-[87px] h-[50px] top-[21px] left-[127px] object-cover"
  alt="Logo"
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kSSSaTZ0DAbM1gNH7Yy03aS8WGkc8P5f4w&s" // law symbol image
/>

{/* Separator line */}
<div
  className="absolute w-[813px] h-0.5 top-[436px] left-[131px] bg-[url('https://unpkg.com/tabler-icons@2.48.0/icons/separator-horizontal.svg')] bg-[100%_100%]"
/>

{/* Small icon */}
<img
  className="top-[154px] left-[923px] absolute w-[22px] h-[22px] object-cover"
  alt="Info icon"
  src="https://cdn-icons-png.flaticon.com/512/709/709496.png" // generic info or user icon
/>



        {/* Content tabs */}
        <Tabs
          defaultValue="recent"
          className="absolute top-[400px] left-[131px] w-[813px]"
        >
          <TabsList className="bg-transparent p-0 h-auto gap-[30px]">
            <TabsTrigger
              value="recent"
              className="font-normal text-[#414141] text-base tracking-[1.12px] leading-[18.7px] data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none data-[state=active]:shadow-none bg-transparent px-0"
            >
              Recent
            </TabsTrigger>
            <TabsTrigger
              value="trending"
              className="font-normal text-[#414141] text-base tracking-[1.12px] leading-[18.7px] data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none data-[state=active]:shadow-none bg-transparent px-0"
            >
              Trending
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="font-normal text-[#414141] text-base tracking-[1.12px] leading-[18.7px] data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none data-[state=active]:shadow-none bg-transparent px-0"
            >
              About
            </TabsTrigger>
          </TabsList>
        </Tabs>



        {/* Sort dropdown */}
<Button className="flex w-[81px] h-[25px] items-center justify-center gap-[3px] px-6 py-0.5 absolute top-[402px] left-[864px] rounded-[1000px] bg-transparent">
  {/* Sort Icon (Top) */}
  <img
    className="relative w-[26.87px] h-[15.31px] ml-[-4.96px]"
    alt="Top"
    src="https://cdn-icons-png.flaticon.com/128/646/646135.png"
  />
  
  {/* Dropdown arrow */}
  <img
    className="relative w-3 h-[11px] mr-[-5.50px]"
    alt="Arrow drop down"
    src="https://cdn-icons-png.flaticon.com/128/271/271210.png"
  />
</Button>


       {/* Corporate Law section */}
<div className="absolute w-[357px] h-[58px] top-[456px] left-[132px] flex items-center justify-between py-2">
  {/* Heading with underline */}
  <div>
    <h2 className="font-normal text-[#414141] text-[22px] tracking-[2.42px] [-webkit-text-stroke:0.5px_#000000]">
      Corporate Law
    </h2>
    <Separator className="w-full h-0.9 mt-1" />
  </div>

  {/* Golden bordered button with golden text */}
  <Button className="h-[25px] px-4 rounded-full bg-transparent text-sm font-medium text-[#d4af37] border border-[#d4af37]">
    Add new card
  </Button>
</div>


        {/* Separator for activities */}
        <Separator className="absolute w-[352px] top-[590px] left-[1030px]" />

        {/* Recent activities list */}
        <div className="absolute top-[611px] left-[1035px] space-y-[54px]">
          {activities.map((activity, index) => (
            <div key={`activity-${index}`} className="relative">
              <div className="absolute top-0 left-0 font-normal text-[#544528] text-xs tracking-[0.60px]">
                {activity.date}
              </div>

              {index < activities.length - 1 && (
                <div className="absolute w-[3px] h-[39px] top-[31px] left-[33px] rounded-[1000px] bg-[url(..//contact-us.png)] bg-cover bg-[50%_50%]" />
              )}

              <div className="absolute w-[261px] h-[55px] top-0 left-[84px]">
                <div className="absolute top-0 left-6 font-normal text-[#544528] text-xs tracking-[0.60px]">
                  Wrote an article
                </div>
                <a
                  className="absolute top-[23px] left-0.5 font-normal text-[#544528] text-xs tracking-[0.60px] underline"
                  href="https://ksridhar.dev/my-github-setup-tricks-and-daily-commands-cmcrbn4u5000602kybl543zxu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {activity.title}
                </a>
                <PenToolIcon className="absolute w-[18px] h-[18px] top-2 left-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Constitutional Law section */}
<div className="absolute w-[390px] h-[80px] top-[785px] left-[132px] flex items-center justify-between py-2">
  {/* Heading with underline */}
  <div>
    <h2 className="font-normal text-[#414141] text-[22px] tracking-[2.42px] [-webkit-text-stroke:0.5px_#000000]">
      Constitutional Law
    </h2>
    <Separator className="w-full h-0.9 mt-1" />
  </div>

  {/* Golden bordered button with golden text */}
  <Button className="h-[25px] px-4 rounded-full bg-transparent text-sm font-medium text-[#d4af37] border border-[#d4af37]">
    Add new card
  </Button>
</div>




      </div>
    </div>
  );
};
