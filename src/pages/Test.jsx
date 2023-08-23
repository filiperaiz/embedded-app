import React from "react";

const TestPage = () => {
  

  const handleEmbeddedApp = () => {
    const embeddedConfig = {
      appId: "app_test",
      urlManifest: "https://embedded-app.vercel.app",
      renderTimeout: 600,
    };

    const data = {
     
    };

    window.embeddedApp(embeddedConfig, data);
  };

  React.useEffect(() => {
   
  }, []);

  return (
    <>
      <button onClick={handleEmbeddedApp}>open app</button>
      <br />
      <br />
      <div id="app_test"></div>
    </>
  );
};

export default TestPage;
