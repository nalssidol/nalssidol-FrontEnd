const Loading = () => {
  return (
    <div>
      {/* <div style={{ position: "relative" }}> */}
      <img
        src="/loading2.png"
        alt="로딩 중이돌 .. 😎"
        style={{
          width: "100%",
          position: "absolute",
          // bottom: "0",
          left: "0",
          zIndex: "100",
        }}
      />
    </div>
  );
};

export default Loading;
