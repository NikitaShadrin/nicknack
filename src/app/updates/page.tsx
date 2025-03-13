"use client";
import { motion } from 'framer-motion';

const UpdatesPage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-64 mt-24 flex justify-center"
      >
        <p className="lg:w-2/5 text-center">
          This tab is an informal changelog for the whole website. If you&#39;re curious to read a more condensed description of exactly how I built each part of this project you should take a look at the{' '}
          <a href="https://github.com/NikitaShadrin/nicknack" className="text-accent hover:underline">README</a> on my github.
        </p>
      </motion.div>
      
      {[{
        version: "Ver 1.00",
        content: (
          <>
            The first version of the site featuring only a landing page, header, footer, light/dark themes, custom cursor, and scrollbar.
            I might edit the main page to be more straight to the point later. While it&apos;s fun to talk about things that motivate me, it feels like too much unnecessary fluff.
          </>
        )
      }, {
        version: "Ver 1.05",
        content: (
          <>
            Implemented a second tab: Infinite scroll! I&apos;ve always wondered how social media sites did it and now I understand it a little better.
            <br/>
            The way I did it was just making an array and generating cards with random colors and words on them. Still can&apos;t make a proper masonry layout work the way I want it to work though...
          </>
        )
      }, {
        version: "Ver 1.10",
        content: (
          <>
            I decided not to go for masonry after all. Settled on a simple grid but I&apos;m glad I explored all the other options despite it not being very fruitful.
            <br/>
            The cards no longer overlap and they bounce when clicked on for absolutely no reason. Incredible work, I have truly outdone myself.
            <br/>
            Onto the next third tab which should be a bit more exciting.
          </>
        )
      }, {
        version: "Ver 1.15",
        content: (
          <>
            Updated the color schemes of both dark and light modes to be more appealing and accessible. Changed the fonts too.
            <br/>
            Preparing to make a to-do list page and I&apos;m not 100% sure on the best way to go about it.
            <br/>
            I remember doing something like this with .NET a few years back. I wasn&apos;t a fan of .NET back then, I wonder if I&apos;d like it now? I feel like I&apos;m more open to learning stuff like that now...
          </>
        )
      }, {
        version: "Ver 1.20",
        content: (
          <>
            Tadaaa! To-do list is done! Took a break between the last tab and this one unfortunately but good to be back!
            <br/>
            I thought I&apos;d use cookies for storing the to-do list info but that doesn&apos;t make sense for this instance. 
            Since there&apos;s no server that needs this info, it&apos;s fine to just keep it client-side so I went with local storage. 
            It was simpler to implement anyway.
            <br/>
            I&apos;ve been using the basic Microsoft To-Do and there&apos;s some things that annoy me about it so it might be worth it to make one of my own! 
            I haven&apos;t made many desktop apps (outside some college projects) so it could be a nice learning experience.
            <br/>
            Though for now I&apos;ll stick to this website... I have been considering learning AWS and then using the fifth tab to redirect to a separate site built with it. Hmmm...
          </>
        )
      }, {
        version: "Ver 2.0",
        content: (
          <>
            A small overhaul, changed the wording on the landing page, changed the way tabs work.
            <br/>
            I have much more interest in making standalone projects at this point so the projects will be divided in two. The mini projects built into NickNack 
            will have their own dropdown tab labeled &quot;Minis&quot;. The larger projects now have their own tab which displays them and links to their repos & demos if available.
            The mobile version actually kinda works now and doesn&apos;t look completely terrible, though I couldn&apos;t make a burger menu work &apos;exactly&apos; how I wanted so I scrapped it.
            <br/>
            The tabs are also reorganized in order of importance instead of chronology. 
            For now the only projects that are linked are a mock landing page and a github repo finder but 
            I have something way bigger planned that I may release with the intent public use
            <br/>
            I&apos;m pretty excited!
          </>
        )
      }].map(({ version, content }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex justify-center"
        >
          <div className="lg:w-2/5">
            <h2 className="text-4xl font-light uppercase tracking-widest text-accent text-center">{version}</h2>
            <p className="text-center">{content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}


export default UpdatesPage;