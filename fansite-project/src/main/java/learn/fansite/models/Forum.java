package learn.fansite.models;

import java.time.LocalDate;
import java.util.Objects;

public class Forum {
    private int forumId;
    private String forumName;
    private String title;
    private String postContent;
    private LocalDate postDate;

    public Forum(){}

    public Forum(int forumId, String forumName, String title, String postContent, LocalDate postDate) {
        this.forumId = forumId;
        this.forumName = forumName;
        this.title = title;
        this.postContent = postContent;
        this.postDate = postDate;
    }

    public int getForumId() {
        return forumId;
    }

    public void setForumId(int forumId) {
        this.forumId = forumId;
    }

    public String getForumName() {
        return forumName;
    }

    public void setForumName(String forumName) {
        this.forumName = forumName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPostContent() {
        return postContent;
    }

    public void setPostContent(String postContent) {
        this.postContent = postContent;
    }

    public LocalDate getPostDate() {
        return postDate;
    }

    public void setPostDate(LocalDate postDate) {
        this.postDate = postDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Forum forum = (Forum) o;
        return forumId == forum.forumId && Objects.equals(forumName, forum.forumName) && Objects.equals(title, forum.title) && Objects.equals(postContent, forum.postContent) && Objects.equals(postDate, forum.postDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(forumId, forumName, title, postContent, postDate);
    }
}
