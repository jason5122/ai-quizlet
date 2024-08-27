import { FlashcardArray } from 'react-quizlet-flashcard';
import './App.css';

function App() {
  const cards = [
    {
      id: 1,
      frontHTML: <b>Machine Learning (ML)</b>,
      backHTML: (
        <>
          <p>
            <b>Definition</b>: This is a way for computers to learn from experience. Instead of being programmed to do
            everything step by step, they find patterns in data and use those patterns to make decisions.
          </p>

          <p>
            <b>Example</b>: Email services like Gmail use machine learning to filter out spam emails. The system learns
            from previous emails that were marked as spam and uses that information to identify future spam emails.
          </p>
        </>
      ),
    },
    {
      id: 2,
      frontHTML: <b>Neural Network</b>,
      backHTML: (
        <>
          <p>
            <b>Definition</b>: Imagine a computer trying to mimic how the human brain works by using a network of
            connected nodes (like brain cells). This helps the computer recognize patterns, such as identifying a
            picture.
          </p>

          <p>
            <b>Example</b>: When you upload a photo on Facebook and it suggests tagging a friend, it’s using a neural
            network. The network has learned to recognize faces by analyzing a large number of photos.
          </p>
        </>
      ),
    },
    {
      id: 3,
      frontHTML: <b>Deep Learning</b>,
      backHTML: (
        <>
          <p>
            <b>Definition</b>: A type of machine learning where the computer uses many layers of processing to
            understand complex information, like recognizing objects in images or understanding speech.
          </p>

          <p>
            <b>Example</b>: Deep learning is used in self-driving cars to recognize traffic signs, pedestrians, and
            other vehicles. The car's computer system processes the information from its cameras and sensors using deep
            learning to make driving decisions.
          </p>
        </>
      ),
    },
    {
      id: 4,
      frontHTML: <b>Natural Language Processing (NLP)</b>,
      backHTML: (
        <>
          <p>
            <b>Definition</b>: This is how computers understand and work with human language, like turning spoken words
            into text or having a conversation with a virtual assistant.
          </p>

          <p>
            <b>Example</b>: NLP powers translation tools like Google Translate. When you type a sentence in English and
            get it translated into another language, NLP helps the tool understand the meaning of the words and rephrase
            them correctly in the target language.
          </p>
        </>
      ),
    },
    {
      id: 5,
      frontHTML: <b>Supervised Learning</b>,
      backHTML: (
        <>
          <p>
            <b>Definition</b>: A way for computers to learn by example. They are shown data that has been labeled with
            the correct answers, and they use this information to learn how to predict answers for new data.
          </p>

          <p>
            <b>Example</b>: When a computer is trained to recognize handwritten numbers, it’s given many examples of
            numbers labeled with the correct digit (like "3" or "7"). Over time, it learns to recognize and label new
            handwritten numbers accurately.
          </p>
        </>
      ),
    },
    {
      id: 6,
      frontHTML: <b>Unsupervised Learning</b>,
      backHTML: (
        <>
          <p>
            <b>Definition</b>: Here, the computer is given data without any labels or correct answers. It has to figure
            out patterns and relationships in the data on its own.
          </p>

          <p>
            <b>Example</b>: A music streaming service might use unsupervised learning to group songs into playlists
            based on patterns in the data, such as similar beats or rhythms, without needing specific instructions on
            what makes songs alike.
          </p>
        </>
      ),
    },
    {
      id: 7,
      frontHTML: <b>Reinforcement Learning</b>,
      backHTML: (
        <>
          <p>
            <b>Definition</b>: This is when a computer learns by trial and error. It tries different actions, learns
            from the results (rewards or penalties), and gets better over time.
          </p>

          <p>
            <b>Example</b>: In video games, AI characters might use reinforcement learning to get better at the game.
            The AI learns from its mistakes (like losing points) and gets better at making decisions (like avoiding
            obstacles).
          </p>
        </>
      ),
    },
    {
      id: 8,
      frontHTML: <b>Computer Vision</b>,
      backHTML: (
        <>
          <p>
            <b>Definition</b>: This is when computers are taught to understand and interpret what they see in photos or
            videos, like recognizing faces or objects.
          </p>

          <p>
            <b>Example</b>: Smartphones use computer vision to automatically focus the camera on faces when taking a
            picture. It helps the camera recognize where the face is and adjust the focus accordingly.
          </p>
        </>
      ),
    },
    {
      id: 9,
      frontHTML: <b>Generative Adversarial Network (GAN)</b>,
      backHTML: (
        <>
          <p>
            <b>Definition</b>: Imagine two computer programs competing against each other. One creates new content (like
            fake images), and the other tries to spot what's fake. Over time, this helps the creator program get really
            good at making realistic content.
          </p>

          <p>
            <b>Example</b>: GANs are used to create realistic fake images, like generating photos of people who don’t
            actually exist. These images look so real that it's hard to tell they were created by a computer, which is
            helpful in creating artwork or enhancing photos.
          </p>
        </>
      ),
    },
  ];

  return (
    <div>
      <FlashcardArray cards={cards} />
    </div>
  );
}

export default App;
