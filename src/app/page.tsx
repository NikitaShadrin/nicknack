"use client";
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <div className="leading-loose max-w-4xl mx-auto">
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
      </br>My name is <strong>Nick</strong> and this is a portfolio website
      which features a dynamic landing page, small projects contained in the dropdown &quot;Minis&quot; that I built to learn things I was curious about and experiment,
      as well as &quot;Projects&quot; with their own github pages and live demos!</p>
      <p>I am actively seeking opportunities to collaborate and build so...
      </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 160 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h2 className='text-6xl font-light uppercase tracking-widest text-accent'>Reach out!</h2>
        <p>if you need a web developer experienced in 
        <strong> React.js, TypeScript, Tailwind, Next.js, restful API integration, GIT and MySQL </strong>
        as well as having a passion for continuous learning. I&apos;ll adapt to the tools needed to get the job done.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 160 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-64"
      >
      <p>Contact me through this email:&nbsp;
        <span onClick={() => {
          navigator.clipboard.writeText("shadrinnikita@gmail.com");
          toast.success("Text copied to clipboard!");
        }} 
        className="text-accent hover:underline">shadrinnikita@gmail.com</span></p>
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
      <p>I strive for more than simply going through the motions and thrive on purpose-driven work. 
        My drive stems from a deep appreciation for creativity&#39;s power to unite communities and solve complex challenges
      </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
      <h2 className="text-5xl font-thin uppercase tracking-widest text-accent">Creativity</h2>
      <p>I am consistently inpired by the creativity and passion other people show for their craft.
        Through diverse perspectives and collaboration comes innovation that truly resonates with people.
      </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
      <h2 className="text-5xl font-thin uppercase tracking-widest text-accent">Music</h2>
      <p>My personal favorite form of art that also informs other aspects of my personal and professional life.
        The lifelong passion I have for music fuels my attention to detail and storytelling—skills I apply to coding and design.
      </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
      <h2 className="text-5xl font-thin uppercase tracking-widest text-accent">Programming</h2>
      <p>My journey with programming is non linear but I will spare the details. 
        After reigniting my passion for development, 
        I am committed to learning and improving as much as I can to deliver well designed applications that have real impact on users.
      </p>
      </motion.div>
      <p>Thank you for visiting my portfolio. You are welcome to explore my projects further and discover how we can create something exceptional together!
      </p>
    </div>
  );
}
