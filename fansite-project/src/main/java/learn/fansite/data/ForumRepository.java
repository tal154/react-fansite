package learn.fansite.data;

import learn.fansite.models.Forum;

import java.util.List;

public interface ForumRepository {

    List<Forum> findAll();

    Forum findById(int forumId);

    Forum add(Forum forum);

    boolean update(Forum forum);

    boolean deleteById(int forumId);

}
