"use client";

const CursorUpButton = () => {
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <button
      onClick={handleOnClick}
      className="fixed bottom-5 md:bottom-10 right-6 md:right-[7rem] p-3 rounded-full bg-blue-800 text-white z-[100]"
      type="button"
    >
      Up{" "}
    </button>
  );
};

export default CursorUpButton;
