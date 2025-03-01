export function Testimonials() {
    const testimonials = [
      { name: "John Doe", review: "Amazing selection and fast delivery!", rating: 5 },
      { name: "Jane Smith", review: "I found my new favorite book here!", rating: 4.5 },
    ];
  
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What Our Readers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="text-sm text-gray-600 ml-2">({testimonial.rating})</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }