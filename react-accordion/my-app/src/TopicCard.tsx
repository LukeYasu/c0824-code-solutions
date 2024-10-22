type Props = {
  topic: { id: number; title: string; content: string };
  onClick: (clickedTopic: number) => void;
  selectedTopic: number | undefined;
};

export function TopicCard({ topic, onClick, selectedTopic }: Props) {
  const topicCard = (
    <div>
      <h1 className="topic-header" onClick={() => onClick(topic.id)}>
        {topic.title}
      </h1>
      {selectedTopic === topic.id && <p>{topic.content}</p>}
    </div>
  );
  return <div>{topicCard}</div>;
}
