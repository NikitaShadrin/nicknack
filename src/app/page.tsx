"use client";
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <div className="leading-loose max-w-4xl mx-auto px-8">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: 'custom-toast',
          duration: 2000,
          success: {
            className: 'custom-toast-success',
          },
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-64 mt-24"
      >
      <p className="mb-24">Hi! <br>
      </br>My name is <strong>Nick</strong> and what you&#39;re looking at is a portfolio website
      that is comprised of this landing page as well as other mini projects focusing on specific
      aspects of web dev!</p>
      <p>If you&#39;re seeing this I&#39;m probably available for hire so...
      </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 160 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h2 className='text-6xl font-light uppercase tracking-widest text-accent'>Hire Me!</h2>
        <p>if you need a web developer experienced in 
        <strong> React.js, TypeScript, Tailwind, Next.js, GIT and using restful APIs </strong>
        as well as having entry level knowledge of SQL and Python</p>      
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 160 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-64"
      >
      <p>Contact me through this email: 
        <span onClick={() => {
          navigator.clipboard.writeText("shadrinnikita@gmail.com");
          toast.success("Text copied to clipboard!");
        }} 
        className="text-accent hover:underline"> shadrinnikita@gmail.com</span></p>
      <p className='mb-8'>Or visit my profile on <a href="https://github.com/NikitaShadrin" className="text-accent hover:underline">Github</a></p>
      <p>Thanks to my other hobbies and interests I also have varying experience in:
        Photoshop, Ableton Live, DaVinci Resolve, Blender, Godot Engine, playing guitar as well as writing and producing music.
      </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
      <h2 className="mb-6 text-6xl font-light uppercase tracking-widest text-accent">What drives me</h2>
      <p>I strive for more than simply going through the motions. It&#39;s difficult to motivate myself when
        what I&#39;m doing isn&#39;t reinforced with some kind of meaning, a deeper interest or purpose. This is as true for 
        mundane activities like exercise and brushing teeth, as it is with my work.
      </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
      <h2 className="text-5xl font-thin uppercase tracking-widest text-accent">Creativity</h2>
      <p>The biggest inspiration of all is simply seeing other people be passionate and creative. 
        I&#39;ve lost count of how many times I encountered other people&#39;s creative work and felt almost 
        obligated to match that passion for their craft. <br />
        Seeing the power within human creativity, the way it can bring together communities and make the world better 
        is one of the main reasons I still do the things I do.
      </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
      <h2 className="text-5xl font-thin uppercase tracking-widest text-accent">Music</h2>
      <p>A personal favorite of mine when it comes to art forms. I sing, play guitar and 
        produce my own music not just because I like the cool sounds I can make or because 
        some chord progressions sound pretty. It&#39;s another language. It&#39;s a different way 
        to express myself and process my life through it. <br />
        As a lover of all things audio I even made a bit of money as a freelancer doing various 
        audio editing. 
      </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
      <h2 className="text-5xl font-thin uppercase tracking-widest text-accent">Programming</h2>
      <p>I was first interested in code some time at the end of highschool. It seemed kinda fun and 
        I didn&#39;t struggle with it as much as most other people so after some deliberation I went to get 
        a bachelor&#39;s in the field. Long story short I lost all motivation, started questioning if I even liked 
        coding to begin with or if I did it &#34;just because&#34;. It took some time soul searching to realize that I 
        was way too in my own head about it all. Now, getting back into it I&#39;m actually excited to code again. 
        I hope to jumpstart my programming path once again. This time with proper self direction. Making cool things 
        and contributing to open source projects.
      </p>
      </motion.div>
      <p>Thank you for reading! I hope you got to know me a little bit through this page
        and you may be interested in some of the other tabs up above so check em out if you haven&#39;t!
      </p>
    </div>
  );
}
