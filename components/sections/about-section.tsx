import type { AboutContent } from "@/lib/types";
import { Box } from "@mui/material"
type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <div style={{ display: 'flex' }}>
      <Box component="section" sx={{
        backgroundColor: '#342B27',
        textAlign: 'center',
        height: '100vh',
        width: '50%',
        aspectRatio: '16/9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start', 
        paddingLeft: '12vh',
      }}>
      <h1 className="font-primary font-bold text-[#BFB8AF] text-left text-[120px] max-w-[800px]">
        {content.title}
      </h1>
      <p className="font-secondary text-white text-left text-[30px] max-w-[800px]">
        {content.body}
      </p>
      </Box>
      <div
        className="w-screen aspect-video flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${content.src})` }}
      >
      </div> 
      </div> 
    );
}