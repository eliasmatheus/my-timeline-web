/* eslint-disable @next/next/no-img-element */
'use client';

import { X } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

interface MediaPickerProps {
  defaultMedia?: string;
}

export function MediaPicker({ defaultMedia }: MediaPickerProps) {
  const [preview, setPreview] = useState<string | null>(defaultMedia ?? null);

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);

    setPreview(previewURL);
  }

  function HandleRemoveMedia() {
    setPreview(null);

    const inputElement = document.getElementById('media') as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';

      // Create a new File object
      const myFile = new File(['Hello World!'], 'reset.jpeg', {
        type: 'text/plain',
        // lastModified: new Date(),
      });

      // Now let's create a DataTransfer to get a FileList
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(myFile);
      inputElement.files = dataTransfer.files;
    }
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />

      {preview && (
        <div className="group relative">
          <img
            src={preview}
            alt=""
            className="aspect-video w-full rounded-lg object-cover"
          />

          <div className="absolute right-3 top-3 flex cursor-pointer items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <button
              type="button"
              className="mb-2 mr-2 rounded-full bg-red-700 px-3 py-2 text-center text-sm text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={HandleRemoveMedia}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
