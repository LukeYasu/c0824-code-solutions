type Props = {
  topics: { id: number; title: string; content: string }[];
  onClick: (clickedTopic: number) => void;
  selectedTopic: number;
};

export function TopicCard({ topics, onClick, selectedTopic }: Props) {
  const topic = topics.map((topic) => (
    <div key={topic.id}>
      <h1 className="topic-header" onClick={() => onClick(topic.id)}>
        {topic.title}
      </h1>
      {selectedTopic === topic.id ? <p>{topic.content}</p> : <></>}
    </div>
  ));
  return <div>{topic}</div>;
}
