"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Country {
  name: string;
  code: string; // ISO country code (e.g., "AE", "US")
  callingCode: string;
}

interface CountryPhoneDropdownProps {
  value: string;
  onChange: (code: string) => void;
}

// Static list of countries with phone codes
const COUNTRIES: Country[] = [
  { name: "United Arab Emirates", code: "AE", callingCode: "+971" },
  { name: "Saudi Arabia", code: "SA", callingCode: "+966" },
  { name: "Kuwait", code: "KW", callingCode: "+965" },
  { name: "Qatar", code: "QA", callingCode: "+974" },
  { name: "Oman", code: "OM", callingCode: "+968" },
  { name: "Bahrain", code: "BH", callingCode: "+973" },
  { name: "India", code: "IN", callingCode: "+91" },
  { name: "Pakistan", code: "PK", callingCode: "+92" },
  { name: "Bangladesh", code: "BD", callingCode: "+880" },
  { name: "United States", code: "US", callingCode: "+1" },
  { name: "United Kingdom", code: "GB", callingCode: "+44" },
  { name: "Canada", code: "CA", callingCode: "+1" },
  { name: "Australia", code: "AU", callingCode: "+61" },
  { name: "Germany", code: "DE", callingCode: "+49" },
  { name: "France", code: "FR", callingCode: "+33" },
  { name: "Italy", code: "IT", callingCode: "+39" },
  { name: "Spain", code: "ES", callingCode: "+34" },
  { name: "Netherlands", code: "NL", callingCode: "+31" },
  { name: "Belgium", code: "BE", callingCode: "+32" },
  { name: "Switzerland", code: "CH", callingCode: "+41" },
  { name: "Sweden", code: "SE", callingCode: "+46" },
  { name: "Norway", code: "NO", callingCode: "+47" },
  { name: "Denmark", code: "DK", callingCode: "+45" },
  { name: "Finland", code: "FI", callingCode: "+358" },
  { name: "Poland", code: "PL", callingCode: "+48" },
  { name: "Russia", code: "RU", callingCode: "+7" },
  { name: "China", code: "CN", callingCode: "+86" },
  { name: "Japan", code: "JP", callingCode: "+81" },
  { name: "South Korea", code: "KR", callingCode: "+82" },
  { name: "Singapore", code: "SG", callingCode: "+65" },
  { name: "Malaysia", code: "MY", callingCode: "+60" },
  { name: "Thailand", code: "TH", callingCode: "+66" },
  { name: "Philippines", code: "PH", callingCode: "+63" },
  { name: "Indonesia", code: "ID", callingCode: "+62" },
  { name: "Vietnam", code: "VN", callingCode: "+84" },
  { name: "Egypt", code: "EG", callingCode: "+20" },
  { name: "Jordan", code: "JO", callingCode: "+962" },
  { name: "Lebanon", code: "LB", callingCode: "+961" },
  { name: "Turkey", code: "TR", callingCode: "+90" },
  { name: "South Africa", code: "ZA", callingCode: "+27" },
  { name: "Nigeria", code: "NG", callingCode: "+234" },
  { name: "Kenya", code: "KE", callingCode: "+254" },
  { name: "Brazil", code: "BR", callingCode: "+55" },
  { name: "Argentina", code: "AR", callingCode: "+54" },
  { name: "Mexico", code: "MX", callingCode: "+52" },
  { name: "New Zealand", code: "NZ", callingCode: "+64" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function CountryPhoneDropdown({
  value,
  onChange,
}: CountryPhoneDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Initialize with UAE as default
  useEffect(() => {
    if (!selectedCountry) {
      const uae = COUNTRIES.find((c) => c.callingCode === "+971");
      if (uae) {
        setSelectedCountry(uae);
        if (!value) {
          onChange(uae.callingCode);
        }
      }
    }
  }, [onChange, value, selectedCountry]);


  // Set selected country based on value prop
  useEffect(() => {
    if (value) {
      const country = COUNTRIES.find((c) => c.callingCode === value);
      if (country) {
        setSelectedCountry(country);
      }
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    // Use a small delay to avoid immediate closure
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const filteredCountries = COUNTRIES.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.callingCode.includes(searchTerm) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    onChange(country.callingCode);
    setIsOpen(false);
    setSearchTerm("");
  };


  const getFlagUrl = (code: string) => {
    return `https://flagcdn.com/w20/${code.toLowerCase()}.png`;
  };

  return (
    <div className="country_phone_dropdown" ref={dropdownRef}>
      <button
        ref={triggerRef}
        type="button"
        className="country_phone_trigger"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {selectedCountry ? (
          <>
            <Image
              src={getFlagUrl(selectedCountry.code)}
              alt={selectedCountry.name}
              width={20}
              height={15}
              className="country_flag_img"
            />
            <span className="country_code">{selectedCountry.callingCode}</span>
          </>
        ) : (
          <span className="country_code">+971</span>
        )}
        <svg
          className={`dropdown_arrow ${isOpen ? "open" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div 
          ref={dropdownRef}
          className="country_phone_dropdown_menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="country_search_wrapper">
            <input
              type="text"
              className="country_search_input"
              placeholder="Search country or code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              onFocus={(e) => e.stopPropagation()}
            />
          </div>
          <div className="country_list">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={`${country.callingCode}-${country.code}`}
                  type="button"
                  className={`country_item ${
                    selectedCountry?.callingCode === country.callingCode
                      ? "selected"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSelectCountry(country);
                  }}
                >
                  <Image
                    src={getFlagUrl(country.code)}
                    alt={country.name}
                    width={20}
                    height={15}
                    className="country_flag_img"
                  />
                  <span className="country_name">{country.name}</span>
                  <span className="country_code">{country.callingCode}</span>
                </button>
              ))
            ) : (
              <div className="country_no_results">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
