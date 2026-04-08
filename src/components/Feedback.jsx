import React from 'react'

const Feedback = () => {
  const features = [
    {
      title: "Flexible Payment",
      description: "Choose repayment plans that fit your income cycle and lifestyle."
    },
    {
      title: "Quick Approval",
      description: "Get your loan approved in as little as 24 hours with our streamlined process."
    },
    {
      title: "Low Interest Rates",
      description: "Enjoy competitive rates that save you money over the life of your loan."
    },
    {
      title: "24/7 Support",
      description: "Access our dedicated support team anytime, anywhere for all your banking needs."
    }
  ];

  const testimonials = [
    {
      content: "With Haggai Plot Advance, I was able to secure land earlier than planned. It felt like a big step forward, and the process was smooth from start to finish.",
      name: "Adebayo Johnson",
      role: "Plot Owner"
    },
    {
      content: "Haggai House Completion helped me finish my home construction without financial stress. Their flexible payment options made all the difference.",
      name: "Funmi Adeyemi",
      role: "Homeowner"
    },
    {
      content: "The Haggai team guided me through my first home purchase with patience and expertise. I couldn't have done it without their support.",
      name: "Chukwuemeka Nwosu",
      role: "First-time Buyer"
    }
  ];

  return (
    <div className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 text-center">
          Why Customers Choose Haggai
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-white dark:text-gray-200 text-left text-lg font-medium">
          Trusted by the Nigerian People.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className=" pt-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Feedback;