import React from "react";
import './style.css'

export default function Quotation({quote, author}) {
  return (
      <div className="quote">
        <div className="quoteText">
            {quote}
        </div>    
        <div className="quoteAuthor">
            {author}
        </div>      
      </div>
  )
}