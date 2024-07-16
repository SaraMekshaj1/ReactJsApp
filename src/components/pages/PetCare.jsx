import React from 'react';
import './PetCare.css';
import petControll from '/src/assets/petExam.jpg';
import petneuter from '/src/assets/neuter-you-pets_main-image.jpg';
import petparasite from '/src/assets/parasites.jpg';
import fatdogp from '/src/assets/fatdog.jpg';
import dogvac from '/src/assets/petvac.jpg';
import medicine from '/src/assets/medicine.png';

export const PetCare = () => {
  return (
    <div className="pet-care-container">
      <p>Health care tips for your pets...</p>

      <img src={petControll} alt="Health Care Infographic" className="img-fluid pet-image" />
      <h3>1. Regular Exams are Vital</h3>
      <p>Just like you, your pet can get heart problems, develop arthritis, or have a toothache. The best way to prevent such problems or catch them early is to see your veterinarian every year. Regular exams are the single most important way to keep pets healthy. Annual vet visits should touch on nutrition and weight control, as well as cover recommended vaccinations, parasite control, dental exam, and health screenings.</p>

      <img src={petneuter} alt="Health Care Infographic" className="img-fluid pet-image" />
      <h3>2. Spay and Neuter Your Pets</h3>
      <p>It’s a procedure that can be performed as early as six to eight weeks of age. Spaying and neutering doesn’t just cut down on the number of unwanted pets; it has other substantial benefits for your pet. Studies show it also lowers the risk of certain cancers and reduces a pet’s risk of getting lost by decreasing the tendency to roam.</p>

      <img src={petparasite} alt="Health Care Infographic" className="img-fluid pet-image" />
      <h3>3. Prevent Parasites</h3>
      <p>Fleas are the most common external parasite that can plague pets, and they can lead to irritated skin, hair loss, hot spots, and infection. Year-round prevention is key. Regular flea and intestinal parasite control, as well as heartworm prevention in endemic areas is important.</p>

      <img src={fatdogp} alt="Health Care Infographic" className="img-fluid pet-image" />
      <h3>4. Maintain a Healthy Weight</h3>
      <p>Many dogs and cats are overweight or obese. And just like people, obesity in pets comes with health risks that include diabetes, arthritis, and cancer. Overfeeding is the leading cause of obesity, says Douglas, who adds that keeping our pets trim can add years to their lives.</p>

      <img src={dogvac} alt="Health Care Infographic" className="img-fluid pet-image" />
      <h3>5. Get Regular Vaccinations</h3>
      <p>For optimal health, pets need regular vaccinations against diseases such as rabies, distemper, feline leukemia, and canine hepatitis. How often your dog or cat needs to be immunized depends on their age, lifestyle, health, and risks so talk to your vet about the vaccinations that make sense for your pet.</p>

      <img src={medicine} alt="Health Care Infographic" className="img-fluid pet-image" />
      <h3>6. Never Give Pets People Medication</h3>
      <p>Medicines made for humans can kill your pet. Human drugs can cause kidney damage, seizures, and cardiac arrest in a dog or cat. If you suspect your pet has consumed your medication — or anything toxic — call your veterinarian.</p>
    </div>
  );
};
