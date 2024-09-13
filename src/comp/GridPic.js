import React, { useState, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

const GridPic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // حالة لفتح/إغلاق الـ Modal
  const [selectedImage, setSelectedImage] = useState(""); // الصورة المختارة

  // دالة لفتح الـ Modal مع الصورة المختارة
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // دالة لإغلاق الـ Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // إضافة حدث الاستماع للضغط على زر Escape لإغلاق الـ Modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    // إضافة الحدث عند تحميل المكون
    document.addEventListener("keydown", handleKeyDown);

    // إزالة الحدث عند تدمير المكون
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      {/* Grid of photos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full h-full p-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="relative aspect-square group cursor-pointer"
            onClick={() => openModal(`/images/q${(index % 6) + 1}.PNG`)} // فتح الـ Modal عند الضغط
          >
            <img
              src={`/images/q${(index % 6) + 1}.PNG`} // Cycle through images 1 to 6
              alt={`صورة ${index + 1}`}
              className="object-cover w-full h-full hover:text-3xl"
            />
            <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-all duration-700 flex items-center justify-center ">
              <EyeIcon className="h-8 w-8 text-white " /> {/* أيقونة العين */}
            </div>
          </div>
        ))}
      </div>

      {/* Modal to display selected image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            {/* زر لإغلاق الـ Modal */}
            <button
              className="absolute top-2 right-2 text-black text-2xl bg-transparent hover:bg-red-500 rounded-full p-1"
              onClick={closeModal}
            >
              &times; {/* علامة X */}
            </button>

            <img
              src={selectedImage}
              alt="الصورة المختارة"
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GridPic;
