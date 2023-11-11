import React, { CSSProperties, useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  y: number;
  speed: number;
  scale: number;
  direction: number;
}

interface SnowProps {
  style?: CSSProperties;
}

const Snow: React.FC<SnowProps> = ({ style }) => {
  // 계절별 이미지 설정 ------------------
  const today: Date = new Date();
  const month: number = today.getMonth() + 1;

  interface MonthToSeasonMap {
    [key: number]: string;
  }

  const MonthToSeason: MonthToSeasonMap = {
    1: "/falling_겨울.png",
    2: "/falling_겨울.png",
    3: "/falling_봄.png",
    4: "/falling_봄.png",
    5: "/falling_봄.png",
    6: "/falling_여름.png",
    7: "/falling_여름.png",
    8: "/falling_여름.png",
    9: "/falling_가을.png",
    10: "/falling_가을.png",
    11: "/falling_가을.png",
    12: "/falling_겨울.png",
  };
  const getSeasonImg = (monthNum: number): string => {
    return MonthToSeason[monthNum] || "/falling_여름.png";
  };
  const SeasonImg: string = getSeasonImg(month);
  // console.log(SeasonImg);

  // 애니메이션 -------------------------
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const starImageRef = useRef<HTMLImageElement | null>(null);

  const getRandomX = (): number => Math.random() * (canvasWidth.current || 0);
  const getRandomY = (): number => Math.random() * (canvasHeight.current || 0);
  const getRandomSpeed = (): number => Math.random() * 0.05 + 0.3; // 0.3 ~ 0.35
  const getRandomScale = (): number => Math.random() * 0.05 + 0.2; // 0.02 + 0.09 => 0.09 ~ 0.11
  const getRandomDirection = (): number => (Math.random() < 0.5 ? -1 : 1);

  const data = useRef<Snowflake[]>([]);
  const canvasWidth = useRef<number>(0);
  const canvasHeight = useRef<number>(0);

  const init = () => {
    make();
    loop();
  };

  const loop = () => {
    move();
    draw();
    window.requestAnimationFrame(loop);
  };

  const make = () => {
    const newData: Snowflake[] = [];

    for (let i = 0; i < 12; i++) {
      const x = getRandomX();
      const y = getRandomY();

      const speed = getRandomSpeed();
      const scale = getRandomScale();
      const direction = getRandomDirection();

      newData.push({ x, y, speed, scale, direction });
    }

    data.current = newData;
  };

  const move = () => {
    data.current = data.current.map((item) => {
      item.y += item.speed;
      item.x += item.speed * item.direction;

      if (item.y > (canvasHeight.current || 0)) {
        item.y = -((starImageRef.current?.height || 0) * item.scale);
        item.x = getRandomX();
        item.speed = getRandomSpeed();
        item.scale = getRandomScale();
        item.direction = getRandomDirection();
      }

      if (item.x > (canvasWidth.current || 0)) {
        item.x = -((starImageRef.current?.width || 0) * item.scale);
      } else if (item.x < -((starImageRef.current?.width || 0) * item.scale)) {
        item.x = canvasWidth.current || 0;
      }

      return item;
    });
  };

  const draw = () => {
    const ctx = ctxRef.current;

    if (ctx) {
      ctx.clearRect(0, 0, canvasWidth.current || 0, canvasHeight.current || 0);

      data.current.forEach((item) => {
        const scaledWidth = (starImageRef.current?.width || 0) * item.scale;
        const scaledHeight = (starImageRef.current?.height || 0) * item.scale;

        if (starImageRef.current) {
          ctx.drawImage(
            starImageRef.current,
            item.x,
            item.y,
            scaledWidth,
            scaledHeight
          );
        }
      });
    }
  };

  useEffect(() => {
    // const canvas = canvasRef.current;
    // const ctx = canvas?.getContext("2d");

    const canvas = canvasRef.current;
    const ctx = canvas && canvas.getContext("2d");

    if (ctx) {
      canvasWidth.current = window.innerWidth;
      canvasHeight.current = window.innerHeight;

      canvas.width = canvasWidth.current;
      canvas.height = canvasHeight.current;

      ctxRef.current = ctx;

      const starImage = new Image();
      starImage.src = SeasonImg;
      //   starImage.src = "falling_겨울.png";

      starImage.onload = () => {
        starImageRef.current = starImage;
        init();
      };

      const handleResize = () => {
        canvasWidth.current = window.innerWidth;
        canvasHeight.current = window.innerHeight;

        canvas.width = canvasWidth.current;
        canvas.height = canvasHeight.current;

        make();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const canvasStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    // zIndex: 100,
    pointerEvents: "none",
    width: "100%",
    transform: "translate3d(0, 0, 0)",
    ...style,
  };

  return <canvas ref={canvasRef} style={canvasStyle} />;
};

export default Snow;
