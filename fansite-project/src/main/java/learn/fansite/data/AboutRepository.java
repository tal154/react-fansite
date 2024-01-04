package learn.fansite.data;

import learn.fansite.models.About;

import java.util.List;

public interface AboutRepository {
    List<About> findAll();

    About findById(int aboutId);
}
