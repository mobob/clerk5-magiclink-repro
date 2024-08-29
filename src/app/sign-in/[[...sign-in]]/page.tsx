import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import Image from "next/image";
import { TermsAndPrivacyLinks } from "./TermsAndPrivacyLinks";

// based on RedirectOptions from clerk (not sure how to import it!)
export interface PageParams {
  afterSignInUrl?: string | null;
  afterSignUpUrl?: string | null;
  redirectUrl?: string | null;
}

export const metadata: Metadata = {
  title: "Paloma Sign-in",
  description: "Sign in to Paloma.",
};

export default function SignInPage() {
  //props: { params: PageParams }) {
  return (
    <>
      <div className="relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col items-center justify-center bg-zinc-900 p-10 text-white dark:border-r lg:flex"></div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <SignIn
            // forceRedirectUrl="/venues"
            />
            <TermsAndPrivacyLinks />
          </div>
        </div>
      </div>
    </>
  );
}
