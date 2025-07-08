import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  ThumbsUp, 
  ThumbsDown, 
  MessageCircle, 
  Plus, 
  Search,
  Filter
} from 'lucide-react';

const Discussion = () => {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "How to implement authentication in React?",
      content: "I'm struggling with implementing user authentication in my React app. What's the best approach?",
      author: "John Doe",
      category: "Programming",
      votes: 15,
      replies: 8,
      timeAgo: "2 hours ago",
      tags: ["React", "Authentication", "JavaScript"]
    },
    {
      id: 2,
      title: "Best practices for CSS Grid layout",
      content: "Looking for advice on when to use CSS Grid vs Flexbox. Any recommendations?",
      author: "Jane Smith",
      category: "Web Design",
      votes: 23,
      replies: 12,
      timeAgo: "4 hours ago",
      tags: ["CSS", "Grid", "Layout"]
    },
    {
      id: 3,
      title: "Data Structures and Algorithms study group",
      content: "Anyone interested in forming a study group for DSA? We can meet weekly to solve problems together.",
      author: "Mike Johnson",
      category: "Study Group",
      votes: 31,
      replies: 18,
      timeAgo: "1 day ago",
      tags: ["DSA", "Study Group", "Algorithms"]
    },
    {
      id: 4,
      title: "Database design for e-commerce project",
      content: "Working on an e-commerce project for my final year. Need advice on database schema design.",
      author: "Sarah Wilson",
      category: "Database",
      votes: 19,
      replies: 15,
      timeAgo: "2 days ago",
      tags: ["Database", "E-commerce", "MySQL"]
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Programming", "Web Design", "Study Group", "Database", "Math", "Engineering"];

  const filteredDiscussions = selectedCategory === "All" 
    ? discussions 
    : discussions.filter(d => d.category === selectedCategory);

  const handleVote = (id: number, type: 'up' | 'down') => {
    setDiscussions(discussions.map(d => 
      d.id === id 
        ? { ...d, votes: type === 'up' ? d.votes + 1 : d.votes - 1 }
        : d
    ));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Discussion Forum
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Ask questions, share knowledge, and connect with fellow students
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Start New Discussion
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Discussion Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">124</div>
              <div className="text-sm text-muted-foreground">Total Discussions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-secondary">89</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">456</div>
              <div className="text-sm text-muted-foreground">Total Answers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-secondary">12</div>
              <div className="text-sm text-muted-foreground">New Today</div>
            </CardContent>
          </Card>
        </div>

        {/* Discussions List */}
        <div className="space-y-4">
          {filteredDiscussions.map((discussion) => (
            <Card key={discussion.id} className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Vote Section */}
                  <div className="flex flex-col items-center gap-1 min-w-[60px]">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleVote(discussion.id, 'up')}
                    >
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-semibold">{discussion.votes}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleVote(discussion.id, 'down')}
                    >
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
                        {discussion.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {discussion.content}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {discussion.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {discussion.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span>{discussion.author}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {discussion.category}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <span>{discussion.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Load More Discussions</Button>
        </div>
      </div>
    </div>
  );
};

export default Discussion;