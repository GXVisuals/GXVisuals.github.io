import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Sender owns the contents of the empty form container.
const NewsletterForm = () => {
  useEffect(() => {
    const senderWindow = window as Window & {
      senderFormsLoaded?: boolean;
      senderForms?: { render: (id: string) => void; destroy: (id: string) => void };
    };
    const render = () => senderWindow.senderForms?.render("bqxzo7");
    window.addEventListener("onSenderFormsLoaded", render);
    if (senderWindow.senderFormsLoaded) render();
    return () => {
      window.removeEventListener("onSenderFormsLoaded", render);
      senderWindow.senderForms?.destroy("bqxzo7");
    };
  }, []);

  return (
    <div>
      <div className="w-full">
        <div style={{ textAlign: "left" }} className="sender-form-field" data-sender-form-id="bqxzo7" />
        <p className="text-center text-sm text-gray-600 mt-4 px-4 pb-4">
          <a href="https://stats.sender.net/forms/bqxzo7/view" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">
            Open the newsletter signup form in a new tab
          </a>
        </p>
      </div>
    </div>
  );
};

// Mounted above the routes: closing persists during client-side navigation.
const NewsletterPopup = () => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby={undefined}
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="w-[calc(100%-2rem)] max-w-[580px] overflow-hidden rounded-xl border-0 bg-white p-0 pt-12 text-black shadow-2xl [&>button]:h-8 [&>button]:w-8 [&>button]:flex [&>button]:items-center [&>button]:justify-center"
      >
        <DialogTitle className="sr-only">Subscribe to the GX Visuals newsletter</DialogTitle>
        <div className="max-h-[calc(90dvh-3rem)] overflow-y-auto overscroll-contain">
          <NewsletterForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
