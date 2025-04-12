import FeatureItem from "@/components/feature-item";
import ChevronRightIcon from "@/components/icons/chevron-right-icons";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative -mt-8 w-full pb-8 md:mt-0">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          {/* Image Column - Order changes based on screen size */}
          <div className="relative order-first mb-8 flex justify-center delay-200 md:order-last lg:mb-0 lg:justify-end">
            <div className="relative w-full">
              {/* Mobile View */}
              <div className="relative mx-auto -my-14 block h-[390px] w-full sm:h-[620px] md:hidden">
                <Image
                  src="/images/hero_image_mobile.png"
                  alt="Fametonic App Interface - Mobile View"
                  data-testid="mobile-hero-image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Desktop View */}
              <div className="relative hidden md:block">
                <Image
                  src="/images/hero_image.png"
                  alt="Fametonic App Interface - Desktop View"
                  data-testid="desktop-hero-image"
                  width={500}
                  height={600}
                  className="-mt-10 h-auto w-full rounded-xl object-cover md:scale-115 lg:scale-125"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="z-10 order-last mx-auto flex max-w-xl flex-col space-y-5 text-center text-white sm:space-y-6 sm:text-center md:order-first md:mx-0 md:text-left">
            {/* Headline Section */}
            <div className="space-y-1">
              <h1 className="text-[25px] leading-snug font-bold md:text-[35px]">
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              <h2 className="text-secondary text-[25px] leading-snug font-extrabold [text-shadow:0px_4px_4px_var(--color-primary)] md:text-[35px]">
                Discover your way to success with Fametonic:
              </h2>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              <FeatureItem
                text="Start growing your influence right away—no waiting required!"
                centered="md:text-left"
                delay="delay-100"
              />
              <FeatureItem
                text="Create viral TikToks and Reels step by step with easy-to-follow lessons"
                centered="md:text-left"
                delay="delay-200"
              />
              <FeatureItem
                text="Use a Personal AI Worker to boost your content"
                centered="md:text-left"
                delay="delay-300"
              />
              <FeatureItem
                text="Learn from expert-led courses designed for aspiring influencer"
                centered="md:text-left"
                delay="delay-400"
              />
            </div>

            {/* Legal Text */}
            <div className="order-1 mb-12 px-3 text-xs text-[#ababab] delay-500 md:order-3 md:mt-8">
              <p>
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
              <p className="mt-2">Fametonic 2024 ©All Rights Reserved.</p>
            </div>

            {/* CTA Section */}
            <div className="order-2 flex flex-col items-center gap-2.5 delay-500 md:max-w-[284px]">
              <Button>
                GET STARTED
                <ChevronRightIcon />
              </Button>
              <p className="text-xs text-white">
                1-minute quiz for personalized insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
