const Footer = () => {
  return (
    <div>
        <footer className="py-12 px-8 bg-gray-900 text-white">
        <div data-aos= "fade-up" className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-full" />
              <span className="text-xl font-semibold">NdifiN</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-teal-600 rounded-full" />
              <a href="#" className="w-8 h-8 bg-teal-600 rounded-full" />
              <a href="#" className="w-8 h-8 bg-teal-600 rounded-full" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+254 778 136 430</li>
              <li>ndifin77@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>SEO</li>
              <li>UI/UX Design</li>
              <li>Financial Consultancy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Our Story</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer