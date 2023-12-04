export default function FAQ() {
  return (
    <section>
      <div id="faq-id" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Frequently Asked Questions</h2>
          </div>

          {/* FAQ section */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-300" data-aos="fade-up" data-aos-delay="100">

            {/* Question 1 */}
            <div>
              <h3 className="text-md font-medium mb-4">What is Trakfy?</h3>
              <p className="text-sm">Trakfy is a comprehensive platform designed to streamline API distribution. It simplifies the process of registering, managing, and monetizing APIs, offering real-time insights and robust security features.</p>
            </div>

            {/* Question 2 */}
            <div>
              <h3 className="text-md font-medium mb-4">Does it support any stack?</h3>
              <p className="text-sm">Absolutely. Trakfy supports any technology stack seamlessly. All you need to do is register your endpoints on the platform, regardless of the underlying technology, making it versatile and adaptable to your preferences.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}