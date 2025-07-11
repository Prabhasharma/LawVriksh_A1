import { PenToolIcon, SearchIcon } from "lucide-react";
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
  // Social media data
  const socialMedia = [
    { icon: "/facebook.svg", alt: "Facebook", bgImage: "/rectangle-41-1.png" },
    { icon: "/linkedin.svg", alt: "Linkedin", bgImage: "/rectangle-40-2.png" },
    { icon: "/twitter.svg", alt: "Twitter", bgImage: "/rectangle-41-2.png" },
    { icon: "/mail.svg", alt: "Mail", bgImage: "/rectangle-40-1.png" },
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
        <div className="absolute w-40 h-[46px] top-[15px] left-[1211px] flex items-center justify-end gap-3">
          <div className="relative w-[46px] h-[46px] bg-[url(/search.svg)] bg-cover bg-[50%_50%]">
            <div className="relative w-6 h-6 top-[11px] left-[11px] bg-[url(/search.svg)] bg-[100%_100%]" />
          </div>

          <div className="relative w-[46px] h-[46px] bg-[url(/contact-us.png)] bg-cover bg-[50%_50%]">
            <SearchIcon className="absolute w-[22px] h-[22px] top-3 left-3" />
          </div>

          <Avatar className="w-[46px] h-[46px]">
            <AvatarImage src="/rectangle-39.png" alt="User profile" />
            <AvatarFallback>RF</AvatarFallback>
          </Avatar>
        </div>

        {/* Follow button */}
        <Button className="absolute top-[459px] left-[1030px] rounded-[1000px] bg-[url(..//contact-us.png)] bg-cover bg-[50%_50%] text-[#3d3d3d] font-normal text-base tracking-[-0.80px]">
          Follow
        </Button>

        {/* Timeline elements */}
        <div className="absolute w-[25px] h-[70px] top-[611px] left-[1057px]">
          <div className="absolute w-[3px] h-[39px] top-[31px] left-[11px] rounded-[1000px] bg-[url(..//contact-us.png)] bg-cover bg-[50%_50%]" />
          <div className="absolute top-0 left-0 font-normal text-[#544528] text-xs tracking-[0.60px]">
            Jul 6
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

        {/* Activity date */}
        <div className="absolute top-[685px] left-[1035px] font-normal text-[#544528] text-xs tracking-[0.60px]">
          Oct 27 2024
        </div>

        {/* Activity item */}
        <div className="absolute w-[261px] h-[55px] top-[611px] left-[1119px]">
          <div className="absolute top-0 left-6 font-normal text-[#544528] text-xs tracking-[0.60px]">
            Wrote an article
          </div>

          <a
            className="absolute top-[23px] left-0.5 font-normal text-[#544528] text-xs tracking-[0.60px] underline"
            href="https://ksridhar.dev/my-github-setup-tricks-and-daily-commands-cmcrbn4u5000602kybl543zxu"
            rel="noopener noreferrer"
            target="_blank"
          >
            My GitHub Setup, Tricks &amp; Daily Commands
          </a>

          <PenToolIcon className="absolute w-[18px] h-[18px] top-2 left-0" />
        </div>

        {/* Bio information */}
        <div className="absolute w-[352px] top-[388px] left-[1030px] font-normal text-[#544528] text-base tracking-[0.80px] leading-[9.7px]">
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

          <Button className="absolute top-[5px] left-[295px] rounded-[1000px] h-[25px] px-6 py-0.5">
            <img
              className="relative w-[30.59px] h-[11.15px] ml-[-8.47px] mr-[-8.12px]"
              alt="Add"
              src="/add.png"
            />
          </Button>
        </div>

        {/* Navigation menu */}
        <div className="absolute w-[371px] h-[23px] top-[30px] left-[549px] flex justify-center space-x-10">
          <img
            className="w-[61px] h-3.5 object-cover"
            alt="Home"
            src="/contact-us.png"
          />
          <img
            className="w-[97px] h-[15px] object-cover"
            alt="About us"
            src="/contact-us.png"
          />
          <img
            className="w-[121px] h-3.5 object-cover"
            alt="Contact us"
            src="/contact-us.png"
          />
        </div>

        {/* Profile picture */}
        <div className="absolute w-[130px] h-[130px] top-[148px] left-[1030px] bg-[url(/rectangle-45.png)] bg-cover bg-[50%_50%]">
          <div className="absolute w-10 h-10 top-[90px] left-[90px] bg-[url(/contact-us.png)] bg-cover bg-[50%_50%]">
            <img
              className="absolute w-[22px] h-[22px] top-[9px] left-[9px]"
              alt="Image"
              src="/image-61.png"
            />
          </div>
        </div>

        {/* Page title */}
        <h1 className="absolute w-[278px] h-[35px] top-[148px] left-[131px] [-webkit-text-stroke:0.5px_#000000] font-normal text-black text-3xl tracking-[2.10px] leading-[35.1px] whitespace-nowrap">
          Robert Fox&apos;s Page
        </h1>

        {/* Article cards - Corporate Law section */}
        <div className="absolute w-[813px] h-[266px] top-[524px] left-[132px] flex gap-[14px]">
          {articles.map((article, index) => (
            <Card
              key={`article-${index}`}
              className="w-[262px] h-[266px] bg-transparent border-none"
            >
              <img
                className="w-full h-[173px] object-cover"
                alt="Article thumbnail"
                src={article.image}
              />
              <CardContent className="p-0 mt-[11px]">
                <div className="w-full h-[82px]">
                  <h3 className="w-full font-normal text-black text-xl leading-[23.4px]">
                    {article.title}
                  </h3>
                  <div className="flex gap-[10px] mt-[27px]">
                    <span className="font-normal text-[#848078] text-xs tracking-[0.60px]">
                      {article.time}
                    </span>
                    <span className="font-normal text-[#848078] text-xs tracking-[-0.12px]">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Author description */}
        <p className="absolute w-[732px] top-[202px] left-[132px] font-normal text-black text-xl leading-[23.4px]">
          An author is a creator of written works, such as books, articles, or
          stories, who uses words to inform, entertain, or inspire readers. They
          often draw from imagination.
        </p>

        {/* Article cards - Constitutional Law section */}
        <div className="absolute w-[813px] h-[173px] top-[863px] left-[132px] flex gap-[14px]">
          {articles.map((article, index) => (
            <img
              key={`const-article-${index}`}
              className="w-[262px] h-[173px] object-cover"
              alt="Article thumbnail"
              src={article.image}
            />
          ))}
        </div>

        {/* Article metadata for Constitutional Law section */}
        <div className="absolute top-[1047px] left-[132px] flex gap-[14px]">
          {articles.map((article, index) => (
            <div
              key={`const-meta-${index}`}
              className="flex flex-col w-[262px] items-start gap-[18px]"
              style={{ left: `${index * 276}px` }}
            >
              <div className="relative w-[268px] h-[82px]">
                <h3 className="w-[262px] font-normal text-black text-xl leading-[23.4px]">
                  {article.title}
                </h3>
                <div className="absolute top-[50px] left-0 font-normal text-[#848078] text-xs tracking-[0.60px]">
                  {article.time}
                </div>
                <div className="absolute top-[50px] left-[70px] font-normal text-[#848078] text-xs tracking-[-0.12px]">
                  {article.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo */}
        <img
          className="absolute w-[87px] h-[50px] top-[21px] left-[127px]"
          alt="Logo"
          src="/group-66.png"
        />

        {/* Separator line */}
        <div className="absolute w-[813px] h-0.5 top-[436px] left-[131px] bg-[url(/line-4-1.svg)] bg-[100%_100%]">
          <img
            className="w-[61px] top-0 left-0 absolute h-0.5"
            alt="Line"
            src="/line-16.svg"
          />
        </div>

        <img
          className="top-[154px] left-[923px] absolute w-[22px] h-[22px] object-cover"
          alt="Image"
          src="/image-60.png"
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
          <img
            className="relative w-[26.87px] h-[15.31px] ml-[-4.96px]"
            alt="Top"
            src="/top.png"
          />
          <img
            className="relative w-3 h-[11px] mr-[-5.50px]"
            alt="Arrow drop down"
            src="/arrow-drop-down.svg"
          />
        </Button>

        {/* Corporate Law section */}
        <div className="absolute w-[357px] h-[58px] top-[456px] left-[132px]">
          <div className="absolute w-[357px] h-[58px] top-0 left-0">
            <div className="relative w-[356px] h-[58px]">
              <h2 className="absolute top-0 left-0 [-webkit-text-stroke:0.5px_#000000] font-normal text-[#414141] text-[22px] tracking-[2.42px]">
                Corporate Law
              </h2>
              <Separator className="absolute w-[355px] top-[53px] left-px" />
            </div>
          </div>

          <Button className="absolute top-[17px] left-[207px] h-[25px] rounded-[1000px] bg-transparent">
            <img
              className="relative w-[100.97px] h-[11.98px] ml-[-5.47px]"
              alt="Add new card"
              src="/add-new-card.png"
            />
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
        <div className="absolute w-[390px] h-[58px] top-[796px] left-[132px]">
          <div className="absolute w-[357px] h-[58px] top-0 left-0">
            <div className="relative w-[356px] h-[58px]">
              <h2 className="absolute top-0 left-0 [-webkit-text-stroke:0.5px_#000000] font-normal text-[#414141] text-[22px] tracking-[2.42px]">
                Constitutional Law
              </h2>
              <Separator className="absolute w-[355px] h-0.5 top-[54px] left-px" />
            </div>
          </div>

          <Button className="absolute top-[17px] left-[251px] h-[25px] rounded-[1000px] bg-transparent">
            <img
              className="relative w-[100.97px] h-[11.98px] ml-[-5.47px]"
              alt="Add new card"
              src="/add-new-card-1.png"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
