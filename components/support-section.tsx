"use client"

import { useState } from "react"
import { Clock, Mail, Phone, MessageCircle, HelpCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { AnimatedBorderBox } from "./animated-border-box"
import { WhatsAppButton } from "./whatsapp-button"

export function SupportSection() {
  const [activeTab, setActiveTab] = useState<"chat" | "phone" | "email">("chat")

  return (
    <section id="support" className="section-padding bg-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="gradient-text">24/7</span> Support
          </h2>
          <p className="mt-4 text-gray-300 md:text-xl">
            Our dedicated team is available around the clock to address your concerns and queries
          </p>
          <div className="mt-4 h-1 w-12 bg-white mx-auto"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <AnimatedBorderBox lineColor="#ffffff" animationDuration={6} height="auto" className="p-0">
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-6">Always Available</h3>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">24</div>
                    <div className="text-sm text-gray-400">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">7</div>
                    <div className="text-sm text-gray-400">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">365</div>
                    <div className="text-sm text-gray-400">Days/Year</div>
                  </div>
                </div>

                <p className="text-gray-300 text-center mb-6">
                  Our support team is available 24 hours a day, 7 days a week, to ensure your business operations run
                  smoothly without interruption.
                </p>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                  <span className="h-2 w-2 rounded-full bg-green-400 mr-2 slow-pulse"></span>
                  Support agents online now
                </div>
              </div>
            </AnimatedBorderBox>
          </div>

          <div className="bg-card rounded-lg overflow-hidden">
            <div className="flex border-b border-gray-800">
              <button
                className={`flex-1 py-4 text-center font-medium ${activeTab === "chat" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"}`}
                onClick={() => setActiveTab("chat")}
              >
                <MessageCircle className="h-5 w-5 inline-block mr-2" />
                Live Chat
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium ${activeTab === "phone" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"}`}
                onClick={() => setActiveTab("phone")}
              >
                <Phone className="h-5 w-5 inline-block mr-2" />
                Phone
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium ${activeTab === "email" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"}`}
                onClick={() => setActiveTab("email")}
              >
                <Mail className="h-5 w-5 inline-block mr-2" />
                Email
              </button>
            </div>

            <div className="p-6">
              {activeTab === "chat" && (
                <div className="space-y-6">
                  <p className="text-gray-300">
                    Connect with our support team instantly through WhatsApp for immediate assistance.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg black-crystal-card">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-green-600/20 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="h-5 w-5 fill-green-500"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">WhatsApp Support</div>
                        <div className="text-xs text-green-400">Available 24/7</div>
                      </div>
                    </div>
                    <WhatsAppButton
                      phoneNumber="+966598331316"
                      message="Hello! I need assistance with Black Layers services."
                    >
                      Start Chat
                    </WhatsAppButton>
                  </div>
                  <p className="text-sm text-gray-400">
                    Average response time: <span className="font-medium text-white">Under 5 minutes</span>
                  </p>
                </div>
              )}

              {activeTab === "phone" && (
                <div className="space-y-6">
                  <p className="text-gray-300">
                    Call our dedicated support line for direct assistance with your queries.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Phone Support</div>
                        <div className="text-xs text-green-400">Available 24/7</div>
                      </div>
                    </div>
                    <a
                      href="tel:+15874296200"
                      className="block w-full py-3 bg-primary text-black rounded-md font-medium hover:bg-primary/90 transition-colors text-center"
                    >
                      +1 (587) 429-6200
                    </a>
                  </div>
                  <p className="text-sm text-gray-400">
                    International callers:{" "}
                    <a href="tel:+15874296200" className="text-white hover:text-white">
                      +1 (587) 429-6200
                    </a>
                  </p>
                </div>
              )}

              {activeTab === "email" && (
                <div className="space-y-6">
                  <p className="text-gray-300">Send us an email and our team will respond promptly to your inquiry.</p>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Email Support</div>
                        <div className="text-xs text-green-400">24-hour response time</div>
                      </div>
                    </div>
                    <a
                      href="mailto:support@blacklayers.ca"
                      className="block w-full py-3 bg-primary text-black rounded-md font-medium hover:bg-primary/90 transition-colors text-center"
                    >
                      support@blacklayers.ca
                    </a>
                  </div>
                  <p className="text-sm text-gray-400">For urgent matters, please use live chat or phone support.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="bg-card p-6 rounded-lg">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <HelpCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
            <p className="text-gray-400 mb-4">
              Browse our comprehensive knowledge base for answers to common questions and detailed guides.
            </p>
            <Link href="/support/knowledge-base" className="inline-flex items-center text-white hover:text-white/90">
              Browse Articles
              <ExternalLink className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Forum</h3>
            <p className="text-gray-400 mb-4">
              Connect with other users, share experiences, and find solutions in our community forum.
            </p>
            <Link href="/support/community" className="inline-flex items-center text-white hover:text-white/90">
              Join Discussion
              <ExternalLink className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Support Hours</h3>
            <p className="text-gray-400 mb-4">
              Our support team is available 24 hours a day, 7 days a week, including holidays.
            </p>
            <Link href="/support/contact" className="inline-flex items-center text-white hover:text-white/90">
              Contact Support
              <ExternalLink className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
      @keyframes slow-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
      
      .slow-pulse {
        animation: slow-pulse 3s ease-in-out infinite;
      }

      @keyframes crystal-shimmer {
        0% { background-position: -100% 0; }
        100% { background-position: 200% 0; }
      }

      .black-crystal-card {
        background: linear-gradient(135deg, rgba(20, 20, 25, 0.9), rgba(10, 10, 15, 0.95));
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 
                    inset 0 0 10px rgba(255, 255, 255, 0.05),
                    0 0 5px rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        position: relative;
        overflow: hidden;
      }

      .black-crystal-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent);
        background-size: 200% 100%;
        animation: crystal-shimmer 3s infinite linear;
      }

      .black-crystal-button {
        background: linear-gradient(135deg, #128C7E, #25D366);
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3),
                    inset 0 0 5px rgba(255, 255, 255, 0.2);
        transform: translateY(0);
        transition: all 0.3s ease;
      }

      .black-crystal-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4),
                    inset 0 0 10px rgba(255, 255, 255, 0.3);
      }

      .black-crystal-button::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(transparent, rgba(255, 255, 255, 0.1), transparent);
        transform: rotate(30deg);
        transition: all 0.5s ease;
      }

      .black-crystal-button:hover::after {
        transform: rotate(30deg) translate(10%, 10%);
      }
    `}</style>
    </section>
  )
}

