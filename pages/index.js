import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    mainCharacter: '',
    age: '',
    gender: '',
    supportingCharacter: '',
    relationship: '',
    dedication: '',
    favouriteColor: '',
    favouritePet: '',
    theme: '',
    moral: '',
    length: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting story...");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("Story received:", result);

      // Display the result (this is just an example)
      alert("Story generated! Check console for now.");
      console.log(result.titlePage);
      console.log(result.story.join("\n\n"));
    } catch (err) {
      console.error("Error generating story:", err);
      alert("Story generation failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="story-form">
      <div className="filter-grid">
        <div className="filter-group">
          <label htmlFor="mainCharacter">Child's Name *</label>
          <input
            type="text"
            id="mainCharacter"
            name="mainCharacter"
            value={formData.mainCharacter}
            onChange={handleChange}
            required
            placeholder="Enter child's name"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="age">Child's Age *</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            max="12"
            required
            placeholder="Enter age (1–12)"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="gender">Child's Gender *</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="supportingCharacter">Supporting Character *</label>
          <input
            type="text"
            id="supportingCharacter"
            name="supportingCharacter"
            value={formData.supportingCharacter}
            onChange={handleChange}
            required
            placeholder="e.g. Ruby"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="relationship">Relationship to Main Character *</label>
          <input
            type="text"
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            required
            placeholder="e.g. Sister, Friend, Pet"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="dedication">Dedication (Optional)</label>
          <input
            type="text"
            id="dedication"
            name="dedication"
            value={formData.dedication}
            onChange={handleChange}
            placeholder="e.g., 'To my beloved child'"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="favouriteColor">Favourite Color *</label>
          <input
            type="text"
            id="favouriteColor"
            name="favouriteColor"
            value={formData.favouriteColor}
            onChange={handleChange}
            required
            placeholder="e.g. Red"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="favouritePet">Favourite Pet *</label>
          <input
            type="text"
            id="favouritePet"
            name="favouritePet"
            value={formData.favouritePet}
            onChange={handleChange}
            required
            placeholder="e.g. Tiger Cub"
          />
        </div>
      </div>

      <div className="filter-grid">
        <div className="filter-group">
          <label htmlFor="theme">Theme *</label>
          <select
            id="theme"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            required
          >
            <option value="">Select a theme</option>
            <option value="Adventure">Adventure</option>
            <option value="Friendship">Friendship</option>
            <option value="Magic">Magic</option>
            <option value="Space">Space</option>
            <option value="Nature">Nature</option>
            <option value="Family">Family</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="moral">Moral *</label>
          <select
            id="moral"
            name="moral"
            value={formData.moral}
            onChange={handleChange}
            required
          >
            <option value="">Select a moral</option>
            <option value="Kindness">Kindness</option>
            <option value="Honesty">Honesty</option>
            <option value="Sharing is caring">Sharing is caring</option>
            <option value="Never give up">Never give up</option>
            <option value="Be brave">Be brave</option>
            <option value="Teamwork wins">Teamwork wins</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="length">Length *</label>
          <select
            id="length"
            name="length"
            value={formData.length}
            onChange={handleChange}
            required
          >
            <option value="">Select length</option>
            <option value="Mini">Mini (8 pages)</option>
            <option value="Short">Short (12 pages)</option>
            <option value="Medium">Medium (18 pages)</option>
            <option value="Long">Long (25 pages)</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" id="generateStory">Generate Story</button>
      </div>
    </form>
  );
} 