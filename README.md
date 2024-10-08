[Reference](https://youtu.be/sUKptmUVIBM)

## Setup
1. Install extensions in VS Code
    - Tailwind CSS IntelliSense
    - ES7+ React/Redux/React-Native snippets
2. `npm install next`
3. Change to own info
    - In the send-email.ts action file, change the "to" email to your own email
    - app/layout.tsx: | Personal..
    - components/about.tsx: About me content
    - components/contact.tsx: 1.direct 2.mailto
    - components/footer.tsx: copyright name
    - components/inro.tsx: 1.ImageSrc 2.ImageAlt 3.Hello 4.CVname 5.Linkedin 6.GitHub
    - lib/data.ts: 1.experience 2.project 3.skill
    - public: resumePDF & projectIMG
    - next.config.js: add Image protocol
4. Add RESEND_API_KEY environment variable in `.env.local`
    - https://resend.com/
5. Import from Git Repository to deploy this Project
    - https://vercel.com/

## Package installed
- `npm install react-icons`
- `npm install framer-motion`
- `npm i clsx`
- `npm i react-intersection-observer`
- `npm i react-vertical-timeline-component` `npm i --save-dev @types/react-vertical-timeline-component`
- `npm i resend@0.16.0`
- `npm i @react-email/components @react-email/tailwind`
- `npm i react-hot-toast`
    - https://react-hot-toast.com/

`npm run dev`
