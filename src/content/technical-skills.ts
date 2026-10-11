import type { LocalizedText } from "./localized-text";

type SkillGroup = {
  id: string;
  title: LocalizedText;
  technologies: string[];
};

export const technicalSkills: SkillGroup[] = [
  {
    "id": "languages",
    "title": {
      "id": "Bahasa pemrograman",
      "en": "Languages"
    },
    "technologies": [
      "Python",
      "SQL",
      "C++",
      "Shell Scripting",
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    "id": "ai-genai",
    "title": {
      "id": "AI & GenAI",
      "en": "AI & GenAI"
    },
    "technologies": [
      "LLMs",
      "Agentic RAG",
      "Hybrid Retrieval (Dense + Sparse, BM25)",
      "Text-to-SQL",
      "Transformer Architecture",
      "LoRA",
      "QLoRA",
      "GRPO",
      "Quantization (GPTQ)",
      "Prompt Tuning (GEPA)"
    ]
  },
  {
    "id": "ai-frameworks",
    "title": {
      "id": "Framework AI",
      "en": "AI Frameworks"
    },
    "technologies": [
      "PyTorch",
      "Hugging Face Transformers",
      "LangChain",
      "LangGraph",
      "Scikit-learn",
      "TRL"
    ]
  },
  {
    "id": "backend",
    "title": {
      "id": "Backend & API",
      "en": "Backend & APIs"
    },
    "technologies": [
      "FastAPI",
      "REST APIs",
      "Webhooks",
      "SIP",
      "Twilio",
      "ElevenLabs",
      "Asynchronous Processing",
      "Event-Driven Systems"
    ]
  },
  {
    "id": "cloud",
    "title": {
      "id": "Cloud & MLOps",
      "en": "Cloud & MLOps"
    },
    "technologies": [
      "AWS (EC2, S3, ECS, SQS, EventBridge, Secrets Manager, CodePipeline)",
      "Kubernetes (K8s)",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "MLflow",
      "Airflow"
    ]
  },
  {
    "id": "databases",
    "title": {
      "id": "Database",
      "en": "Databases"
    },
    "technologies": [
      "PostgreSQL",
      "Redis (Queues)",
      "FAISS",
      "Chroma",
      "Pinecone",
      "Qdrant",
      "Drizzle ORM"
    ]
  },
  {
    "id": "data-vision",
    "title": {
      "id": "Data & Computer Vision",
      "en": "Data & Vision"
    },
    "technologies": [
      "Pandas",
      "NumPy",
      "OpenCV",
      "YOLOv8",
      "Whisper",
      "K-Means",
      "TF-IDF",
      "Tableau"
    ]
  },
  {
    "id": "evaluation",
    "title": {
      "id": "Evaluasi AI",
      "en": "AI Evaluation"
    },
    "technologies": [
      "Langfuse",
      "LLM-as-a-Judge",
      "Blind Human Review",
      "BLEU",
      "ROUGE-L",
      "METEOR",
      "BERTScore"
    ]
  }
];
