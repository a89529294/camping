"use client";

import { FormEventHandler } from "react";

export function ContactForm() {
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-2.5" onSubmit={onSubmit}>
      <label className="flex items-center gap-2.5 text-gray-500">
        姓名
        <input
          type="text"
          className="h-7.5 flex-1 border border-gray-300 pl-1"
        />
      </label>
      <label className="flex items-center gap-2.5 text-gray-500">
        手機
        <input
          type="text"
          className="h-7.5 flex-1 border border-gray-300 pl-1"
        />
      </label>
      <label className="flex  gap-2.5 text-gray-500">
        <span className="mt-[3px]">內容</span>
        <textarea rows={4} className=" flex-1 border border-gray-300 pl-1" />
      </label>
      <div className="flex">
        <div className="w-[42px]" />
        <button className="grid h-7 flex-1 place-items-center border-[1.5px] border-green-200 text-sm font-bold text-green-200">
          送出
        </button>
      </div>
    </form>
  );
}
