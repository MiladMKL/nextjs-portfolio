import { useEffect } from "react";
import { useRouter } from "next/router";

const Resume = () => {
  const router = useRouter();

  useEffect(() => {
    const pdfFile = "/pdfs/Lebenslauf.pdf";
    router.push(pdfFile);
  }, [router]);

  return <div>Downloading resume...</div>;
};

export default Resume;
