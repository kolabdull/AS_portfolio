const Footer = () => (
  <footer className="py-12 px-4 border-t border-gray-200 mt-24">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-gray-400 text-sm">
        Designed & Built by <span className="text-gray-900">Samuel Ofoegbu</span>
      </p>
      <p className="text-gray-300 text-xs mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;