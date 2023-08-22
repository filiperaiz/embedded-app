import React from "react";

const SignPage = () => {
  

  const handleEmbeddedApp = () => {
    const embeddedConfig = {
      appId: "sign_b2b_dashboard",
      urlManifest: "http://localhost:8000",
      renderTimeout: 600,
    };

    const data = {
      route: "/envelopes",
      credentials: {
        access_token: "",
        expires_in: 11775
      }
    };

    window.embeddedApp(embeddedConfig, data);
  };

  React.useEffect(() => {
 
  }, []);

  return (
    <>
      <button onClick={handleEmbeddedApp}>open dash</button>
      <br />
      <br />
      <div id="sign_b2b_dashboard"></div>
    </>
  );
};

export default SignPage;
