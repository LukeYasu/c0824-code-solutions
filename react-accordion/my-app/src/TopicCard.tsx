type Props = {
  topics: { id: number; title: string; content: string }[];
  handleClick: (selectedTopic: number) => void;
  selectedTopic: number;
};

export function TopicCard({ topics, handleClick, selectedTopic }: Props) {
  return (
    <div>
      {topics.map((topic) => (
        <div key={topic.id}>
          <h1 className="topic-header" onClick={() => handleClick(topic.id)}>
            {topic.title}
          </h1>
          {selectedTopic === topic.id ? <p>{topic.content}</p> : <></>}
        </div>
      ))}
    </div>
  );
}
